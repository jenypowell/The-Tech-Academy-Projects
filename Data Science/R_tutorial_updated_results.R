
library(tidyverse)
library(xgboost)


housing = read.csv('housing.csv')


head(housing)


housing$total_bedrooms[is.na(housing$total_bedrooms)] = median(housing$total_bedrooms , na.rm = TRUE)

housing$mean_bedrooms = housing$total_bedrooms/housing$households
housing$mean_rooms = housing$total_rooms/housing$households

drops = c('total_bedrooms', 'total_rooms')

housing = housing[ , !(names(housing) %in% drops)]

head(housing)

categories = unique(housing$ocean_proximity)
#split the categories off
cat_housing = data.frame(ocean_proximity = housing$ocean_proximity)

for(cat in categories){
  cat_housing[,cat] = rep(0, times= nrow(cat_housing))
}

head(cat_housing) #see the new columns on the right


for(i in 1:length(cat_housing$ocean_proximity)){
  cat = as.character(cat_housing$ocean_proximity[i])
  cat_housing[,cat][i] = 1
}

head(cat_housing)

cat_columns = names(cat_housing)
keep_columns = cat_columns[cat_columns != 'ocean_proximity']
cat_housing = select(cat_housing,one_of(keep_columns))

tail(cat_housing)

colnames(housing)

drops = c('ocean_proximity','median_house_value')
housing_num =  housing[ , !(names(housing) %in% drops)]

head(housing_num)

scaled_housing_num = scale(housing_num)

head(scaled_housing_num)

cleaned_housing = cbind(cat_housing, scaled_housing_num, median_house_value=housing$median_house_value)

head(cleaned_housing)

set.seed(537) # Set a random seed so that same sample can be reproduced in future runs

sample = sample.int(n = nrow(cleaned_housing), size = floor(.8*nrow(cleaned_housing)), replace = F)
train = cleaned_housing[sample, ] #just the samples
test  = cleaned_housing[-sample, ] #everything but the samples


nrow(train) + nrow(test) == nrow(cleaned_housing)


train_y = train[,'median_house_value']
train_x = train[, names(train) !='median_house_value']

head(train)

#put into the xgb matrix format
dtrain = xgb.DMatrix(data =  as.matrix(train_x), label = train_y )
dtest = xgb.DMatrix(data =  as.matrix(test_x), label = test_y)

# these are the datasets the rmse is evaluated for at each iteration
watchlist = list(train=dtrain, test=dtest)

bst = xgb.train(data = dtrain, 
                max.depth = 8, 
                eta = 0.01, 
                nthread = 2, 
                nround = 1000, 
                watchlist = watchlist, 
                objective = "reg:linear", 
                early_stopping_rounds = 50,
                print_every_n = 500)

