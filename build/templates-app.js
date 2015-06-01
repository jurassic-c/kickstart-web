angular.module('templates-app', ['about/about.tpl.html', 'food/add.tpl.html', 'food/food.tpl.html', 'health/add.tpl.html', 'health/add_mental.tpl.html', 'health/add_sleep.tpl.html', 'health/add_symptom.tpl.html', 'health/add_toilet.tpl.html', 'health/add_treatment.tpl.html', 'health/health.tpl.html', 'home/home.tpl.html', 'journal/add.tpl.html', 'journal/journal.tpl.html', 'login/login.tpl.html', 'my_profile/my_profile.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("food/add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("food/add.tpl.html",
    "<h3>Add a food</h3>");
}]);

angular.module("food/food.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("food/food.tpl.html",
    "<h3>Food!</h3>\n" +
    "<a ui-sref=\"food_add\">Add a food!</a>");
}]);

angular.module("health/add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("health/add.tpl.html",
    "<h3>Add health info</h3>");
}]);

angular.module("health/add_mental.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("health/add_mental.tpl.html",
    "<h3>Add mental health info</h3>");
}]);

angular.module("health/add_sleep.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("health/add_sleep.tpl.html",
    "<h3>Add Sleep info</h3>");
}]);

angular.module("health/add_symptom.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("health/add_symptom.tpl.html",
    "<h3>Add Symptom info</h3>");
}]);

angular.module("health/add_toilet.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("health/add_toilet.tpl.html",
    "<h3>Add Toilet info</h3>");
}]);

angular.module("health/add_treatment.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("health/add_treatment.tpl.html",
    "<h3>Add treatment info</h3>");
}]);

angular.module("health/health.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("health/health.tpl.html",
    "<h3>Health!</h3>\n" +
    "<a ui-sref=\"health_add\">Add health info!</a>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-12 col-md-6\">\n" +
    "    <button ui-sref=\"food_add\" class=\"btn btn-lg btn-primary btn-block\">Food / Drink</button>\n" +
    "    <button ui-sref=\"health_add_sleep\" class=\"btn btn-lg btn-info btn-block\">Sleep</button>\n" +
    "    <button ui-sref=\"health_add\" class=\"btn btn-lg btn-success btn-block\">Health</button>\n" +
    "    <button ui-sref=\"health_add_symptom\" class=\"btn btn-lg btn-warning btn-block\">Symptom</button>\n" +
    "    <button ui-sref=\"journal_add\" class=\"btn btn-lg btn-default btn-block\">Journal</button>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("journal/add.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("journal/add.tpl.html",
    "<h3>Add Journal Entry</h3>");
}]);

angular.module("journal/journal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("journal/journal.tpl.html",
    "<h3>Journal!</h3>\n" +
    "<a ui-sref=\"journal_add\">Add Journal Entry!</a>");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-sm-12 col-lg-6 col-lg-offset-3\">\n" +
    "      <h3>Please Sign In</h3>\n" +
    "\n" +
    "      <div class=\"panel\">\n" +
    "        <div ng-show=\"form_type=='phone_form'\" collapse=\"form_collapsed\">\n" +
    "          <form>\n" +
    "            <div class=\"form-group\">\n" +
    "              <label for=\"phone\">Phone Number</label>\n" +
    "              <div class=\"row\">\n" +
    "                <div class=\"col-lg-4 col-xs-6\">\n" +
    "                  <select ng-model=\"country_code\" class=\"form-control\">\n" +
    "                    <option value=\"1\">United States</option>\n" +
    "                    <option value=\"52\">México</option>\n" +
    "                  </select>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-8 col-xs-6\">\n" +
    "                  <input type=\"tel\" class=\"form-control\" id=\"phone\" name=\"user_phone\" ng-model=\"phone\">\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "              <button class=\"btn btn-lg btn-info btn-block\" ng-click=\"send_phone_code()\">Send Login Code</button>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div  ng-show=\"form_type=='phone_code'\" collapse=\"form_collapsed\">\n" +
    "          <form name=\"phone_login\">\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': phone_login.login_code.$invalid}\">\n" +
    "              <label for=\"phone_login_code\">Login Code</label>\n" +
    "              <input type=\"text\" class=\"form-control\" id=\"phone_login_code\" ng-model=\"code\" name=\"login_code\" value=\"\" capitalize>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "              <button class=\"btn btn-lg btn-info btn-block\" ng-click=\"login_code()\">Login</button>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"form_type=='email_form'\" collapse=\"form_collapsed\">\n" +
    "          <form>\n" +
    "            <div class=\"form-group\">\n" +
    "              <label for=\"email\">Email</label>\n" +
    "              <input type=\"email\" class=\"form-control\" id=\"email\" ng-model=\"email\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "              <button class=\"btn btn-lg btn-info btn-block\" ng-click=\"send_email_code()\">Send Login Code</button>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "        <div ng-show=\"form_type=='email_code'\" collapse=\"form_collapsed\">\n" +
    "          <form name=\"email_login\">\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': email_login.login_code.$invalid}\">\n" +
    "              <label for=\"email_login_code\">Login Code</label>\n" +
    "              <input type=\"text\" class=\"form-control\" id=\"email_login_code\" ng-model=\"code\" name=\"login_code\" value=\"\" capitalize>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "              <button class=\"btn btn-lg btn-info btn-block\" ng-click=\"login_code()\">Login</button>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ng-show=\"form_type=='password'\" collapse=\"form_collapsed\">\n" +
    "          <form name=\"password_login\">\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': password_login.$invalid}\">\n" +
    "              <label for=\"username\">Email</label>\n" +
    "              <input type=\"text\" class=\"form-control\" id=\"username\" ng-model=\"email\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-class=\"{'has-error': password_login.$invalid}\">\n" +
    "              <label for=\"password\">Password</label>\n" +
    "              <input type=\"password\" class=\"form-control\" id=\"password\" ng-model=\"password\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "              <button class=\"btn btn-lg btn-info btn-block\" ng-click=\"login_password()\">Login</button>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\" id=\"login_selector\">\n" +
    "          <div class=\"text-center\">\n" +
    "            <button ng-click=\"set_login_type('phone_form')\" ng-disabled=\"form_collapsed\" class=\"btn btn-default\" ng-class=\"{'active': form_type=='phone_form' || form_type=='phone_code'}\"><i class=\"fa fa-mobile\"></i></button>\n" +
    "            <button ng-click=\"set_login_type('email_form')\" ng-disabled=\"form_collapsed\" class=\"btn btn-default\" ng-class=\"{'active': form_type=='email_form' || form_type=='email_code'}\"><i class=\"fa fa-envelope\"></i></button>\n" +
    "            <button ng-click=\"set_login_type('password')\" ng-disabled=\"form_collapsed\" class=\"btn btn-default\" ng-class=\"{'active': form_type=='password'}\"><i class=\"fa fa-key\"></i></button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("my_profile/my_profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("my_profile/my_profile.tpl.html",
    "<h3>My Profile</h3>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-xs-12\">\n" +
    "    <form name=\"form\" novalidate>\n" +
    "      <div class=\"form-group\" ng-class=\"{'has-success': form.user_name.$dirty && form.user_name.$valid}\">\n" +
    "        <label for=\"user.name\">Name</label>\n" +
    "        <input ng-disabled=\"form_submitting\" type=\"text\" name=\"user_name\" ng-model=\"user.name\" id=\"user.name\" class=\"form-control\">\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-class=\"{'has-success': form.user_email.$dirty && form.user_email.$valid, 'has-error': form.user_email.$invalid}\">\n" +
    "        <label for=\"user.email\">Email</label>\n" +
    "        <input ng-disabled=\"form_submitting\" type=\"email\" name=\"user_email\" ng-model=\"user.email\" id=\"user.email\" class=\"form-control\" >\n" +
    "        <span ng-show=\"form.user_email.$invalid\" class=\"help-block\">Email must be a valid email address and must be one that nobody else is using.</span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-class=\"{'has-success': form.user_phone.$dirty && form.user_phone.$valid}\">\n" +
    "        <label for=\"user.phone\">Phone</label>\n" +
    "        <input ng-disabled=\"form_submitting\" type=\"tel\" ng-model=\"user.phone\" id=\"user.phone\" class=\"form-control\" name=\"user_phone\">\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-class=\"{'has-success': form.user_password.$dirty && form.user_password.$valid}\">\n" +
    "        <label for=\"user.password\">New Password</label>\n" +
    "        <input ng-disabled=\"form_submitting\" type=\"password\" ng-model=\"user.password\" id=\"user.password\" class=\"form-control\" name=\"user_password\">\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-class=\"{'has-success': form.user_re_password.$dirty && form.user_re_password.$valid, 'has-error': form.user_re_password.$dirty && form.user_re_password.$invalid}\">\n" +
    "        <label for=\"user.re_password\">Repeat New Password</label>\n" +
    "        <input ng-disabled=\"form_submitting\" type=\"password\" ng-model=\"user.re_password\" id=\"user.re_password\" class=\"form-control\" pw-match=\"user.password\" name=\"user_re_password\">\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <button ng-disabled=\"form_submitting\" ng-click=\"save()\" class=\"btn btn-primary\"><i ng-show=\"form_submitting\" class=\"fa fa-spinner fa-spin\"></i><span ng-hide=\"form_submitting\">Save</span></button>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>");
}]);
