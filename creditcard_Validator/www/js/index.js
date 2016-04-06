/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
$(document).ready(function(){
    $('#valid').click(function(e){
	e.preventDefault();
	var value = $('#credit').val();
	var validate = checkCard(value);
	if(validate==true)
	{
		$("#message").css('color','green');
		$("#message").html("Valid Credit Card Number!");
	}
	else
	{
		$("#message").css('color','red');
		$("#message").html("Invalid Credit Card Number");
	}
	});
	function checkCard(card){
		var c = card;
		var num = parseInt(c.substr(c.length - 1));
		if(num==0000000000000000)
		{
			return false;
		}
		var c = c.slice(0,-1)
		var c = c.split("").reverse().join("");
		var c = c.split("");
		var a = 2;
		var cm = [];
		for (var i = 0; i < c.length; i++){
			if (a%2 == 0){var t = c[i]*2;
			if (t > 9){var t = (t -9);}
			cm.push(t);
			}else{cm.push(parseInt(c[i]));}
			a++;
		}
		var f = 0;
		for (var i = 0; i < cm.length; i++) {f += cm[i];}
		f = f + num;
		if (f%10 == 0){
			return true;
			}
			else{
				return false;
				}
	}
    
});
