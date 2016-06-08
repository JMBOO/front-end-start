var apiurl = "http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20160603&endDate=20160605&pageSize=10&pageNo=1";

var wrap = document.getElementById("wrap");
var template = document.getElementById("movieList").innerHTML;

function render(wrap, template, data) {
    var html = tmpl(template, {list : data});
    wrap.innerHTML = html
}

getJSON(apiurl, function(res){
    console.log(res);

    render( wrap, template, res.data);

});
