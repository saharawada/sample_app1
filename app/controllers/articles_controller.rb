def index
  @articles = Article.find(:all)
  @date = params[:month] ? Date.parse(params[:month]) : Date.today
end
