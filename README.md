# EPIC_MAIL4
This is an application that is developed to help people exchange information over the internet
[![Build Status](https://travis-ci.org/jennizalwango/EPIC_MAIL.svg?branch=challenge3)](https://travis-ci.org/jennizalwango/EPIC_MAIL)  [![Coverage Status](https://coveralls.io/repos/github/jennizalwango/EPIC_MAIL/badge.svg?branch=challenge3)](https://coveralls.io/github/jennizalwango/EPIC_MAIL?branch=challenge3) [![Maintainability](https://api.codeclimate.com/v1/badges/7375c492ed31fcf0768e/maintainability)](https://codeclimate.com/github/jennizalwango/EPIC_MAIL/maintainability)


## project name 
  Epic Mail

## project overview
  Epic mail is an online system that improves and makes communcation easliy where a user 
  Create a user account.Sign in the system.Get all received emails.
  Get all the unread emails and get all emails sent by a the other user.
  Get a specific user’s email.
  Send email to individuals.Delete an email in a user’s inbox

## Getting started
 These instructions will get you acopy of the project up and running on your local machine for development and testing purposes

## Prerequisties
Inorder  to run this application you need the following;
you need to have [python3](https://www.python.org/downloads/)  installed on your machine.

You need to have [flask](http://flask.pocoo.org/docs/1.0/installation/) installed on your 
machine.

The application is bulit with a python flamework called [Flask](http://flask.pocoo.org/).
Pylint allows one to write code following a specific style guide.
 to install it run

```
pip install pylint
```

## Installing 

> - To clone this appplication;

 ```
  $ git clone : https://github.com/jennizalwango/EPIC_MAIL.git
```


 > - Then change directory 
```
 $ cd <app directory>
```

 Extract and open this application in a text editor Vscode or any other editor
 for Vscode run this 
 ```
 $ code .
 ``` 
  
> - You have to install a virutualenvirnoment, 
```
  $ pip3 install virtualenv
```

> - Create the virtual envirnoment
```
  $ virtualenv myenv
```

> - Activate your virtualenv to start working.
 ```
 $ source myenv/bin/activate
 ```

 Good then install the app dependencies,these are found in the `requirements.txt`
 ```
 $ pip install -r requiremnets.txt
 ```

This will help you get all the app dependencies used in the application development

Execute the application by running a given command 
 
 ```
 $ python run.py
 ```

After running that command the server will start running http://127.0.0.1.5000/ which is the default URL 

### How to run the tests:
  ``` 
  $ pytest -v  or
    
  $ python -m unittest 

  ```

## Functionality
-Create an account and sign in to the system

-Get all received emails.

-Get all the unread emails

-Get all emails sent by a the other user

-Get a specific user’s email

-Send email to individuals.

-Delete an email in a user’s inbox

