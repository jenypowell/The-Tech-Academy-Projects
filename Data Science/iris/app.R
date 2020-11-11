library(shiny)
library(ggplot2)

# data set for examples
data(iris)
names(iris)

ui <- fluidPage(
  
  # App title ----
  
  fluidPage(
    
    titlePanel(div("Iris Data Analysis", style = "color:purple")),
    br(),
    "Visualizations and Interactive Widgets for the Iris Data Set",
    br(),
    br(),
    br(),
    sidebarLayout(
      sidebarPanel(
                 
                   selectInput("Xin", "Select x-axis variable", 
                               choices = list("Sepal.Length", "Sepal.Width",  
                                              "Petal.Length", "Petal.Width")),
                   selectInput("Yin", "Select y-axis variable", 
                               choices = list("Sepal.Length", "Sepal.Width",  
                                              "Petal.Length", "Petal.Width")),
                   radioButtons("Colorin", "Color by species?", 
                                choices = list("Yes", "No")),
                   
                   # Input: Slider for the number of bins ----
                   sliderInput(inputId = "nbins",
                               label = "Number of bins:",
                               min = 10,
                               max = 50,
                               value = 25),
                   
                   img(src = "unnamed.gif")
            
                   
      ),
      mainPanel("Here are the results", align = "center",
                plotOutput("xyplot"),
                # Output: Histogram ----
                plotOutput(outputId = "histox"),
                plotOutput(outputId = "histoy")),
     
  )
  )
)



# Define server logic required to draw a histogram ----
server <- function(input, output) {
  
 

  output$xyplot = renderPlot({
    if(input$Colorin == "Yes") {
      ggplot(data = iris, aes_string(x = input$Xin, y = input$Yin, 
                                     color = "Species")) + 
        geom_point()
    } else if(input$Colorin == "No") {
      ggplot(data = iris, aes_string(x = input$Xin, y = input$Yin)) + 
        geom_point()
    }
  })
  
  output$histox = renderPlot({
    ggplot(data = iris, aes_string(x = input$Xin)) + 
      geom_histogram(bins = input$nbins)
  })
  
  output$histoy = renderPlot({
    ggplot(data = iris, aes_string(x = input$Yin)) + 
      geom_histogram(bins = input$nbins)
  })
  
}

shinyApp(ui, server)















