"use strict";
console.log( "main.js" );

let context = {
				"name": "Dan",
				"occupation": "Software developer",
				"language": "Handlebars"
			  }

//STEP 1 - retrieve the template data from html
let template = $("#handlebars-starter").html();
//STEP 2 - compile the template data into a function
let templateScript = Handlebars.compile(template);
//STEP 3 - Execute the newly created function passing the data as an argument
let myhtml = templateScript(context);
//STEP 4 - Insert the HTML code into the page
$(document.body).append(myhtml);

//next one////////////////////////////////////////////////////////////////////

let lang_content = 	{
						"language": "handlebars",
						"adjective": "awesome"
					}

lang_content.happy = "YEAH YEAH YEAH"
//STEP 1
let tmp_language = $("#hbs-language").html();
//STEP 2
let tmp_language_script = Handlebars.compile(tmp_language);
//STEP 3
let html_language = tmp_language_script(lang_content);
//STEP 4
$(document.body).append(html_language)

//next one////////////////////////////////////////////////////////////////////

let dev_context = {
					  "occupation" : "developer",
					  "website" : 	{
					    				"name" : "Nashville Software School"
					  				},
					  "names" : [
								    {"firstName" : "Brenda"},
								    {"firstName" : "Jisie"},
								    {"firstName" : "Casey"}
					  			],

					  "cities" : ["Nashville, Franklin, Green Hills"]
				 };

let tpl_devs = $("#hbs-devs").html();
let tpl_devs_script = Handlebars.compile(tpl_devs);
let html_devs = tpl_devs_script(dev_context);
$(document.body).append(html_devs)

//next one////////////////////////////////////////////////////////////////////
var voter_context = {
						  "person":[
									    {"name" : "John", "year" : 1988},
									    {"name" : "Liz" , "year" : 1972},
									    {"name" : "Mike" , "year" : 2009},
									]
					}
//custom helper

Handlebars.registerHelper("voterStatus", function(year){

	if (year > 1988) {
		return "can not vote"
	}  else  {
		return "is a voter"
	}
})

let tpl_voter =$("#hbs-voter").html();
let tpl_voter_script = Handlebars.compile(tpl_voter);
let html_voter = tpl_voter_script(voter_context);
$(document.body).append(html_voter)






















