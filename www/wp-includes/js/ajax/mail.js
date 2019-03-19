var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('627727466402');

var message = {
    "from_email": send_as_email,
    "from_name": send_as_name,
    "merge_language": "mailchimp",
    "global_merge_vars": null
    };
    
    message.to = [{
      "email":'SENDER_EMAIL',
      "name":'SENDER_NAME',
      "type": "to"
    }];
    
    message.subject ='Order Meal';
    mandrill_client.messages.sendTemplate({
    "template_name":'NAME_OF_MAILCHIMP_TEMPLATE',
    "template_content": null,
    "message": message
    }, function (result) {
    //DO ON RESPONSE
    }, function (e) {
    //TRACE Your Error
    });