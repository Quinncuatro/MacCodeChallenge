#!/bin/bash
# Henry Quinn

/usr/bin/sendmail "phoneNumber@provider-text.com" < final.txt

recipients="phoneNumber@provider-text.com"
from="Code Challengee"

message_txt="Just a heads up, I'm giving Henry my first round draft pick."

/usr/sbin/sendmail "$recipients" << EOF
from:$from
$message_txt
EOF
