// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(function() {
  $("#article_published_on").datepicker();
});

#calendar table {
  border-collapse: collapse;
  width: 100%;
}

#calendar td,
#calendar th {
  font-family: "Lucida Grande",arial,helvetica,sans-serif;
  font-size: 10px;
  padding: 6px;
  border: 1px solid #999;
}

#calendar th {
  background: #DDD;
  color: #666;
  text-align: center;
  width: 14.2857142857143%;
}

#calendar td {
  background: #FFF;
  color: #777;
  height: 80px;
  vertical-align: top;
  font-size: 16px;
}

#calendar .notmonth {
  color: #CCC;
}

#calendar #month {
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

#calendar #month a, #calendar #month a:hover {
  text-decoration: none;
  padding: 0 10px;
  color: #999;
}

#calendar .today {
  background-color: #D7F2FF;
}

#calendar ul {
  margin: 0;
  margin-top: 5px;
  padding: 0;
  list-style: none;
}

#calendar li {
  margin: 0;
  padding: 0;
  font-size: 11px;
  text-align: center;
}
