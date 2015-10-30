(function outer(modules, cache, entries){

  /**
   * Global
   */

  var global = (function(){ return this; })();

  /**
   * Require `name`.
   *
   * @param {String} name
   * @api public
   */

  function require(name){
    if (cache[name]) return cache[name].exports;
    if (modules[name]) return call(name, require);
    throw new Error('cannot find module "' + name + '"');
  }

  /**
   * Call module `id` and cache it.
   *
   * @param {Number} id
   * @param {Function} require
   * @return {Function}
   * @api private
   */

  function call(id, require){
    var m = cache[id] = { exports: {} };
    var mod = modules[id];
    var name = mod[2];
    var fn = mod[0];
    var threw = true;

    try {
      fn.call(m.exports, function(req){
        var dep = modules[id][1][req];
        return require(dep || req);
      }, m, m.exports, outer, modules, cache, entries);
      threw = false;
    } finally {
      if (threw) {
        delete cache[id];
      } else if (name) {
        // expose as 'name'.
        cache[name] = cache[id];
      }
    }

    return cache[id].exports;
  }

  /**
   * Require all entries exposing them on global if needed.
   */

  for (var id in entries) {
    if (entries[id]) {
      global[entries[id]] = require(id);
    } else {
      require(id);
    }
  }

  /**
   * Duo flag.
   */

  require.duo = true;

  /**
   * Expose cache.
   */

  require.cache = cache;

  /**
   * Expose modules
   */

  require.modules = modules;

  /**
   * Return newest require.
   */

   return require;
})({
1: [function(require, module, exports) {
var list = {};
var awesome = require('./data/awesome.json');
var options = {
  keys: ['name', 'description', 'cate'],
};
var f;
var d = [];
var $awesome = $('.awesome');
var $searchResult = $('.search-result');

getAllAwesome();

function getAllAwesome(cate) {
  $awesome.html('');
  Object.keys(awesome).forEach(function(e) {
    d = d.concat(awesome[e]);
    var title = '<h2>' + e + '</h2>';
    $awesome.append(title);
    awesome[e].forEach(function(e) {
      var id = e.name.replace(/\W/g, '').toLowerCase();
      var href = id === 'nodejs' ? '' : ' href="' + e.url + '" ';
      var link = '<a class="mui-btn mui-btn--small mui-btn--primary" id="' + id + '"' + href + 'target="_blank">' +  e.name + '</a>';
      $awesome.append(link);
    });
  });

  f = new Fuse(d, options);
}

$('#nodejs').on('click', function(e) {
  list.nodejs = require('./data/nodejs.json');
  d = [];
  $('.cate').html('nodejs');
  $awesome.html('');
  $awesome.append('<a href="/awesome-search/"><- Back to Awesome</a>');

  $('#returnAwesome').on('click', function() {
    getAllAwesome();
  });

  Object.keys(list.nodejs).forEach(function(e) {
    d = d.concat(list.nodejs[e]);
    var title = '<h2>' + e + '</h2>';
    $awesome.append(title);
    list.nodejs[e].forEach(function(e) {
      var id = e.name.replace(/\W/g, '').toLowerCase();
      var href = id === 'nodejs' ? '' : ' href="' + e.url + '" ';
      var link = '<a class="mui-btn mui-btn--small mui-btn--primary" id="' + id + '"' + href + 'target="_blank"><span class="mui--text-black-87">' +  e.name + '</span><span class="mui--text-white"> - ' + e.description + '</span></a>';
      $awesome.append(link);
    });
  });

  f = new Fuse(d, options);
});

$('.awesome-input').on('input', function(e) {

  var query = $(this).val();
  $awesome.addClass('content-hidden');
  $searchResult.html('');

  if (!query) {
    $awesome.removeClass('content-hidden');
  }

  var result = f.search(query);
  var link = '';
  var description = '';
  for (var i = 0, len = result.length; i < len; ++i) {
    if (result[i]) {
      description = result[i].description ? ' - ' + result[i].description + '</br>' : '<br/>';
      link += '<a class="" href="' + result[i].url + '" target="_blank">' +  result[i].name + '</a>' + description;
    }
  }

  $searchResult.html(link);
});

}, {"./data/awesome.json":2,"./data/nodejs.json":3}],
2: [function(require, module, exports) {
module.exports = {
  "Platforms": [
    {
      "name": "Node.js",
      "url": "https://github.com/sindresorhus/awesome-nodejs",
      "cate": "Platforms"
    },
    {
      "name": "Frontend Development",
      "url": "https://github.com/dypsilon/frontend-dev-bookmarks",
      "cate": "Platforms"
    },
    {
      "name": "iOS",
      "url": "https://github.com/vsouza/awesome-ios",
      "cate": "Platforms"
    },
    {
      "name": "Android",
      "url": "https://github.com/JStumpp/awesome-android",
      "cate": "Platforms"
    },
    {
      "name": "IoT & Hybrid Apps",
      "url": "https://github.com/weblancaster/awesome-IoT-hybrid",
      "cate": "Platforms"
    },
    {
      "name": "Electron",
      "url": "https://github.com/sindresorhus/awesome-electron",
      "cate": "Platforms"
    },
    {
      "name": "Cordova",
      "url": "https://github.com/busterc/awesome-cordova",
      "cate": "Platforms"
    },
    {
      "name": "React Native",
      "url": "https://github.com/jondot/awesome-react-native",
      "cate": "Platforms"
    },
    {
      "name": "Xamarin",
      "url": "https://github.com/benoitjadinon/awesome-xamarin",
      "cate": "Platforms"
    },
    {
      "name": "Linux",
      "url": "https://github.com/aleksandar-todorovic/awesome-linux",
      "cate": "Platforms"
    },
    {
      "name": "OS X",
      "url": "https://github.com/iCHAIT/awesome-osx",
      "cate": "Platforms"
    },
    {
      "name": "Command-Line",
      "url": "https://github.com/herrbischoff/awesome-osx-command-line",
      "cate": "Platforms"
    },
    {
      "name": "watchOS",
      "url": "https://github.com/yenchenlin1994/awesome-watchos",
      "cate": "Platforms"
    },
    {
      "name": "JVM",
      "url": "https://github.com/deephacks/awesome-jvm",
      "cate": "Platforms"
    },
    {
      "name": "Salesforce",
      "url": "https://github.com/mailtoharshit/awesome-salesforce",
      "cate": "Platforms"
    },
    {
      "name": "Amazon Web Services",
      "url": "https://github.com/donnemartin/awesome-aws",
      "cate": "Platforms"
    },
    {
      "name": "Windows",
      "url": "https://github.com/RiseLedger/awesome-windows",
      "cate": "Platforms"
    }
  ],
  "Programming Languages": [
    {
      "name": "JavaScript",
      "url": "https://github.com/sorrycc/awesome-javascript",
      "cate": "Programming Languages"
    },
    {
      "name": "Promises",
      "url": "https://github.com/wbinnssmith/awesome-promises",
      "cate": "Programming Languages"
    },
    {
      "name": "Swift",
      "url": "https://github.com/matteocrippa/awesome-swift",
      "cate": "Programming Languages"
    },
    {
      "name": "Python",
      "url": "https://github.com/vinta/awesome-python",
      "cate": "Programming Languages"
    },
    {
      "name": "Rust",
      "url": "https://github.com/kud1ing/awesome-rust",
      "cate": "Programming Languages"
    },
    {
      "name": "Haskell",
      "url": "https://github.com/krispo/awesome-haskell",
      "cate": "Programming Languages"
    },
    {
      "name": "PureScript",
      "url": "https://github.com/passy/awesome-purescript",
      "cate": "Programming Languages"
    },
    {
      "name": "Go",
      "url": "https://github.com/avelino/awesome-go",
      "cate": "Programming Languages"
    },
    {
      "name": "Scala",
      "url": "https://github.com/lauris/awesome-scala",
      "cate": "Programming Languages"
    },
    {
      "name": "Ruby",
      "url": "https://github.com/markets/awesome-ruby",
      "cate": "Programming Languages"
    },
    {
      "name": "Ruby Events",
      "url": "https://github.com/planetruby/awesome-events",
      "cate": "Programming Languages"
    },
    {
      "name": "Clojure",
      "url": "https://github.com/razum2um/awesome-clojure",
      "cate": "Programming Languages"
    },
    {
      "name": "ClojureScript",
      "url": "https://github.com/emrehan/awesome-clojurescript",
      "cate": "Programming Languages"
    },
    {
      "name": "Elixir",
      "url": "https://github.com/h4cc/awesome-elixir",
      "cate": "Programming Languages"
    },
    {
      "name": "Elm",
      "url": "https://github.com/isRuslan/awesome-elm",
      "cate": "Programming Languages"
    },
    {
      "name": "Erlang",
      "url": "https://github.com/drobakowski/awesome-erlang",
      "cate": "Programming Languages"
    },
    {
      "name": "Julia",
      "url": "https://github.com/svaksha/Julia.jl",
      "cate": "Programming Languages"
    },
    {
      "name": "Lua",
      "url": "https://github.com/LewisJEllis/awesome-lua",
      "cate": "Programming Languages"
    },
    {
      "name": "C",
      "url": "https://github.com/aleksandar-todorovic/awesome-c",
      "cate": "Programming Languages"
    },
    {
      "name": "C/C++",
      "url": "https://github.com/fffaraz/awesome-cpp",
      "cate": "Programming Languages"
    },
    {
      "name": "R",
      "url": "https://github.com/qinwf/awesome-R",
      "cate": "Programming Languages"
    },
    {
      "name": "D",
      "url": "https://github.com/zhaopuming/awesome-d",
      "cate": "Programming Languages"
    },
    {
      "name": "Common Lisp",
      "url": "https://github.com/CodyReichert/awesome-cl",
      "cate": "Programming Languages"
    },
    {
      "name": "Perl",
      "url": "https://github.com/hachiojipm/awesome-perl",
      "cate": "Programming Languages"
    },
    {
      "name": "Groovy",
      "url": "https://github.com/kdabir/awesome-groovy",
      "cate": "Programming Languages"
    },
    {
      "name": "Dart",
      "url": "https://github.com/yissachar/awesome-dart",
      "cate": "Programming Languages"
    },
    {
      "name": "Java",
      "url": "https://github.com/akullpp/awesome-java",
      "cate": "Programming Languages"
    },
    {
      "name": "OCaml",
      "url": "https://github.com/rizo/awesome-ocaml",
      "cate": "Programming Languages"
    },
    {
      "name": "Coldfusion",
      "url": "https://github.com/seancoyne/awesome-coldfusion",
      "cate": "Programming Languages"
    },
    {
      "name": "Fortran",
      "url": "https://github.com/rabbiabram/awesome-fortran",
      "cate": "Programming Languages"
    },
    {
      "name": ".NET",
      "url": "https://github.com/quozd/awesome-dotnet",
      "cate": "Programming Languages"
    },
    {
      "name": "PHP",
      "url": "https://github.com/ziadoz/awesome-php",
      "cate": "Programming Languages"
    },
    {
      "name": "Delphi",
      "url": "https://github.com/Fr0sT-Brutal/awesome-delphi",
      "cate": "Programming Languages"
    },
    {
      "name": "Assembler",
      "url": "https://github.com/mat0thew/awesome-asm",
      "cate": "Programming Languages"
    },
    {
      "name": "AutoHotkey",
      "url": "https://github.com/ahkscript/awesome-AutoHotkey",
      "cate": "Programming Languages"
    },
    {
      "name": "AutoIt",
      "url": "https://github.com/J2TeaM/awesome-AutoIt",
      "cate": "Programming Languages"
    },
    {
      "name": "Crystal",
      "url": "https://github.com/veelenga/awesome-crystal",
      "cate": "Programming Languages"
    },
    {
      "name": "TypeScript",
      "url": "https://github.com/dzharii/awesome-typescript",
      "cate": "Programming Languages"
    }
  ],
  "Front-end Development": [
    {
      "name": "JavaScript Must Watch Talks",
      "url": "https://github.com/bolshchikov/js-must-watch",
      "cate": "Front-end Development"
    },
    {
      "name": "ES6 Tools",
      "url": "https://github.com/addyosmani/es6-tools",
      "cate": "Front-end Development"
    },
    {
      "name": "Web Performance Optimization",
      "url": "https://github.com/davidsonfellipe/awesome-wpo",
      "cate": "Front-end Development"
    },
    {
      "name": "Web Tools",
      "url": "https://github.com/lvwzhen/tools",
      "cate": "Front-end Development"
    },
    {
      "name": "Critical-Path (Above-the-fold) CSS Tools",
      "url": "https://github.com/addyosmani/critical-path-css-tools",
      "cate": "Front-end Development"
    },
    {
      "name": "React",
      "url": "https://github.com/enaqx/awesome-react",
      "cate": "Front-end Development"
    },
    {
      "name": "Web Components",
      "url": "https://github.com/mateusortiz/webcomponents-the-right-way",
      "cate": "Front-end Development"
    },
    {
      "name": "Polymer",
      "url": "https://github.com/Granze/awesome-polymer",
      "cate": "Front-end Development"
    },
    {
      "name": "Angular 2",
      "url": "https://github.com/angular-class/awesome-angular2",
      "cate": "Front-end Development"
    },
    {
      "name": "Angular",
      "url": "https://github.com/gianarb/awesome-angularjs",
      "cate": "Front-end Development"
    },
    {
      "name": "Backbone",
      "url": "https://github.com/instanceofpro/awesome-backbone",
      "cate": "Front-end Development"
    },
    {
      "name": "HTML5",
      "url": "https://github.com/diegocard/awesome-html5",
      "cate": "Front-end Development"
    },
    {
      "name": "SVG",
      "url": "https://github.com/willianjusten/awesome-svg",
      "cate": "Front-end Development"
    },
    {
      "name": "Canvas",
      "url": "https://github.com/raphamorim/awesome-canvas",
      "cate": "Front-end Development"
    },
    {
      "name": "KnockoutJS",
      "url": "https://github.com/dnbard/awesome-knockout",
      "cate": "Front-end Development"
    },
    {
      "name": "Dojo Toolkit",
      "url": "https://github.com/peterkokot/awesome-dojo",
      "cate": "Front-end Development"
    },
    {
      "name": "Inspiration",
      "url": "https://github.com/NoahBuscher/Inspire",
      "cate": "Front-end Development"
    },
    {
      "name": "Ember",
      "url": "https://github.com/nmec/awesome-ember",
      "cate": "Front-end Development"
    },
    {
      "name": "Android UI",
      "url": "https://github.com/wasabeef/awesome-android-ui",
      "cate": "Front-end Development"
    },
    {
      "name": "iOS UI",
      "url": "https://github.com/cjwirth/awesome-ios-ui",
      "cate": "Front-end Development"
    },
    {
      "name": "Scalable CSS",
      "url": "https://github.com/davidtheclark/scalable-css-reading-list",
      "cate": "Front-end Development"
    },
    {
      "name": "Meteor",
      "url": "https://github.com/Urigo/awesome-meteor",
      "cate": "Front-end Development"
    },
    {
      "name": "BEM",
      "url": "https://github.com/sturobson/BEM-resources",
      "cate": "Front-end Development"
    },
    {
      "name": "CSS Must-Watch Talks",
      "url": "https://github.com/AllThingsSmitty/must-watch-css",
      "cate": "Front-end Development"
    },
    {
      "name": "Flexbox",
      "url": "https://github.com/afonsopacifer/awesome-flexbox",
      "cate": "Front-end Development"
    },
    {
      "name": "Web Typography",
      "url": "https://github.com/deanhume/typography",
      "cate": "Front-end Development"
    },
    {
      "name": "Web Accessibility",
      "url": "https://github.com/brunopulis/awesome-a11y",
      "cate": "Front-end Development"
    },
    {
      "name": "Material Design",
      "url": "https://github.com/sachin1092/awesome-material",
      "cate": "Front-end Development"
    },
    {
      "name": "CSS",
      "url": "https://github.com/sotayamashita/awesome-css",
      "cate": "Front-end Development"
    },
    {
      "name": "D3",
      "url": "https://github.com/wbkd/awesome-d3",
      "cate": "Front-end Development"
    },
    {
      "name": "Emails",
      "url": "https://github.com/jonathandion/awesome-emails",
      "cate": "Front-end Development"
    },
    {
      "name": "jQuery",
      "url": "https://github.com/peterkokot/awesome-jquery",
      "cate": "Front-end Development"
    },
    {
      "name": "Web Audio",
      "url": "https://github.com/notthetup/awesome-webaudio",
      "cate": "Front-end Development"
    },
    {
      "name": "Offline-First",
      "url": "https://github.com/pazguille/offline-first",
      "cate": "Front-end Development"
    }
  ],
  "Back-end Development": [
    {
      "name": "Django",
      "url": "https://github.com/rosarior/awesome-django",
      "cate": "Back-end Development"
    },
    {
      "name": "Flask",
      "url": "https://github.com/humiaozuzu/awesome-flask",
      "cate": "Back-end Development"
    },
    {
      "name": "Docker",
      "url": "https://github.com/veggiemonk/awesome-docker",
      "cate": "Back-end Development"
    },
    {
      "name": "Vagrant",
      "url": "https://github.com/iJackUA/awesome-vagrant",
      "cate": "Back-end Development"
    },
    {
      "name": "Pyramid",
      "url": "https://github.com/ITCase/awesome-pyramid",
      "cate": "Back-end Development"
    },
    {
      "name": "Play1 Framework",
      "url": "https://github.com/PerfectCarl/awesome-play1",
      "cate": "Back-end Development"
    },
    {
      "name": "CakePHP",
      "url": "https://github.com/friendsofcake/awesome-cakephp",
      "cate": "Back-end Development"
    },
    {
      "name": "Symfony2",
      "url": "https://github.com/EmanueleMinotto/awesome-symfony2",
      "cate": "Back-end Development"
    },
    {
      "name": "Laravel",
      "url": "https://github.com/chiraggude/awesome-laravel",
      "cate": "Back-end Development"
    },
    {
      "name": "Rails",
      "url": "https://github.com/ekremkaraca/awesome-rails",
      "cate": "Back-end Development"
    },
    {
      "name": "Rails Gem",
      "url": "https://github.com/hothero/awesome-rails-gem",
      "cate": "Back-end Development"
    },
    {
      "name": "Phalcon",
      "url": "https://github.com/sergeyklay/awesome-phalcon",
      "cate": "Back-end Development"
    },
    {
      "name": "Useful `.htaccess` Snippets",
      "url": "https://github.com/phanan/htaccess",
      "cate": "Back-end Development"
    },
    {
      "name": "nginx",
      "url": "https://github.com/fcambus/nginx-resources",
      "cate": "Back-end Development"
    },
    {
      "name": "Dropwizard",
      "url": "https://github.com/stve/awesome-dropwizard",
      "cate": "Back-end Development"
    }
  ],
  "Computer Science": [
    {
      "name": "University Courses",
      "url": "https://github.com/prakhar1989/awesome-courses",
      "cate": "Computer Science"
    },
    {
      "name": "Data Science",
      "url": "https://github.com/okulbilisim/awesome-datascience",
      "cate": "Computer Science"
    },
    {
      "name": "Machine Learning",
      "url": "https://github.com/josephmisiti/awesome-machine-learning",
      "cate": "Computer Science"
    },
    {
      "name": "Speech and Natural Language Processing",
      "url": "https://github.com/edobashira/speech-language-processing",
      "cate": "Computer Science"
    },
    {
      "name": "Linguistics",
      "url": "https://github.com/theimpossibleastronaut/awesome-linguistics",
      "cate": "Computer Science"
    },
    {
      "name": "Cryptography",
      "url": "https://github.com/MaciejCzyzewski/retter",
      "cate": "Computer Science"
    },
    {
      "name": "Computer Vision",
      "url": "https://github.com/jbhuang0604/awesome-computer-vision",
      "cate": "Computer Science"
    },
    {
      "name": "Deep Learning",
      "url": "https://github.com/ChristosChristofidis/awesome-deep-learning",
      "cate": "Computer Science"
    },
    {
      "name": "Deep Vision",
      "url": "https://github.com/kjw0612/awesome-deep-vision",
      "cate": "Computer Science"
    },
    {
      "name": "Open Source Society University",
      "url": "https://github.com/open-source-society/computer-science",
      "cate": "Computer Science"
    }
  ],
  "Big Data": [
    {
      "name": "Big Data",
      "url": "https://github.com/onurakpolat/awesome-bigdata",
      "cate": "Big Data"
    },
    {
      "name": "Public Datasets",
      "url": "https://github.com/caesar0301/awesome-public-datasets",
      "cate": "Big Data"
    },
    {
      "name": "Hadoop",
      "url": "https://github.com/youngwookim/awesome-hadoop",
      "cate": "Big Data"
    },
    {
      "name": "Data Engineering",
      "url": "https://github.com/igorbarinov/awesome-data-engineering",
      "cate": "Big Data"
    }
  ],
  "Theory": [
    {
      "name": "Papers We Love",
      "url": "https://github.com/papers-we-love/papers-we-love",
      "cate": "Theory"
    },
    {
      "name": "Talks",
      "url": "https://github.com/JanVanRyswyck/awesome-talks",
      "cate": "Theory"
    },
    {
      "name": "Algorithms",
      "url": "https://github.com/tayllan/awesome-algorithms",
      "cate": "Theory"
    },
    {
      "name": "Algorithm Visualizations",
      "url": "https://github.com/enjalot/algovis",
      "cate": "Theory"
    },
    {
      "name": "Artificial Intelligence",
      "url": "https://github.com/owainlewis/awesome-artificial-intelligence",
      "cate": "Theory"
    },
    {
      "name": "Search Engine Optimization",
      "url": "https://github.com/marcobiedermann/search-engine-optimization",
      "cate": "Theory"
    }
  ],
  "Books": [
    {
      "name": "Free Programming Books",
      "url": "https://github.com/vhf/free-programming-books",
      "cate": "Books"
    },
    {
      "name": "Free Software Testing Books",
      "url": "https://github.com/ligurio/free-software-testing-books/blob/master/free-software-testing-books.md",
      "cate": "Books"
    },
    {
      "name": "Go Books",
      "url": "https://github.com/dariubs/GoBooks",
      "cate": "Books"
    },
    {
      "name": "R Books",
      "url": "https://github.com/RomanTsegelskyi/rbooks",
      "cate": "Books"
    },
    {
      "name": "Mind Expanding Books",
      "url": "https://github.com/hackerkid/Mind-Expanding-Books",
      "cate": "Books"
    }
  ],
  "Editors": [
    {
      "name": "Sublime Text",
      "url": "https://github.com/dreikanter/sublime-bookmarks",
      "cate": "Editors"
    },
    {
      "name": "Vim",
      "url": "http://vimawesome.com",
      "cate": "Editors"
    },
    {
      "name": "Emacs",
      "url": "https://github.com/emacs-tw/awesome-emacs",
      "cate": "Editors"
    },
    {
      "name": "Atom",
      "url": "https://github.com/mehcode/awesome-atom",
      "cate": "Editors"
    }
  ],
  "Gaming": [
    {
      "name": "Game Development",
      "url": "https://github.com/ellisonleao/magictools",
      "cate": "Gaming"
    },
    {
      "name": "Game Talks",
      "url": "https://github.com/hzoo/awesome-gametalks",
      "cate": "Gaming"
    },
    {
      "name": "Godot",
      "url": "https://github.com/Calinou/awesome-godot",
      "cate": "Gaming"
    },
    {
      "name": "Open Source Games",
      "url": "https://github.com/leereilly/games",
      "cate": "Gaming"
    }
  ],
  "Developer Environment": [
    {
      "name": "Quick Look Plugins",
      "url": "https://github.com/sindresorhus/quick-look-plugins",
      "cate": "Developer Environment"
    },
    {
      "name": "Dev Env",
      "url": "https://github.com/jondot/awesome-devenv",
      "cate": "Developer Environment"
    },
    {
      "name": "Dotfiles",
      "url": "https://github.com/webpro/awesome-dotfiles",
      "cate": "Developer Environment"
    },
    {
      "name": "Shell",
      "url": "https://github.com/alebcay/awesome-shell",
      "cate": "Developer Environment"
    },
    {
      "name": "ZSH Plugins",
      "url": "https://github.com/unixorn/awesome-zsh-plugins",
      "cate": "Developer Environment"
    },
    {
      "name": "Browser Extensions for GitHub",
      "url": "https://github.com/stefanbuck/awesome-browser-extensions-for-github",
      "cate": "Developer Environment"
    },
    {
      "name": "Git Cheat Sheet",
      "url": "https://github.com/arslanbilal/git-cheat-sheet",
      "cate": "Developer Environment"
    },
    {
      "name": "Git Tips",
      "url": "https://github.com/git-tips/tips",
      "cate": "Developer Environment"
    },
    {
      "name": "Git Add-ons",
      "url": "https://github.com/stevemao/awesome-git-addons",
      "cate": "Developer Environment"
    }
  ],
  "Entertainment": [
    {
      "name": "Science Fiction",
      "url": "https://github.com/sindresorhus/awesome-scifi",
      "cate": "Entertainment"
    },
    {
      "name": "Fantasy",
      "url": "https://github.com/RichardLitt/awesome-fantasy",
      "cate": "Entertainment"
    },
    {
      "name": "Podcasts",
      "url": "https://github.com/guipdutra/awesome-geek-podcasts",
      "cate": "Entertainment"
    },
    {
      "name": "Email Newsletters",
      "url": "https://github.com/vredniy/awesome-newsletters",
      "cate": "Entertainment"
    }
  ],
  "Databases": [
    {
      "name": "Database",
      "url": "https://github.com/numetriclabz/awesome-db",
      "cate": "Databases"
    },
    {
      "name": "MySQL",
      "url": "https://github.com/shlomi-noach/awesome-mysql/blob/gh-pages/index.md",
      "cate": "Databases"
    },
    {
      "name": "SQLAlchemy",
      "url": "https://github.com/dahlia/awesome-sqlalchemy",
      "cate": "Databases"
    },
    {
      "name": "InfluxDB",
      "url": "https://github.com/mark-rushakoff/awesome-influxdb",
      "cate": "Databases"
    },
    {
      "name": "Neo4j",
      "url": "https://github.com/GraphGeeks/awesome-neo4j",
      "cate": "Databases"
    }
  ],
  "Resources": [
    {
      "name": "Creative Commons Media",
      "url": "https://github.com/shime/creative-commons-media",
      "cate": "Resources"
    },
    {
      "name": "Images",
      "url": "https://github.com/heyalexej/awesome-images",
      "cate": "Resources"
    },
    {
      "name": "Fonts",
      "url": "https://github.com/brabadu/awesome-fonts",
      "cate": "Resources"
    },
    {
      "name": "Codeface",
      "url": "https://github.com/chrissimpkins/codeface",
      "cate": "Resources"
    }
  ],
  "Learn": [
    {
      "name": "CLI Workshoppers/Adventures",
      "url": "https://github.com/therebelrobot/awesome-workshopper",
      "cate": "Learn"
    },
    {
      "name": "Learn to Program",
      "url": "https://github.com/karlhorky/learn-to-program",
      "cate": "Learn"
    },
    {
      "name": "Speaking",
      "url": "https://github.com/matteofigus/awesome-speaking",
      "cate": "Learn"
    },
    {
      "name": "Tech Videos",
      "url": "https://github.com/lucasviola/awesome-tech-videos",
      "cate": "Learn"
    }
  ],
  "Security": [
    {
      "name": "Application Security",
      "url": "https://github.com/paragonie/awesome-appsec",
      "cate": "Security"
    },
    {
      "name": "Security",
      "url": "https://github.com/sbilly/awesome-security",
      "cate": "Security"
    },
    {
      "name": "CTF",
      "url": "https://github.com/apsdehal/awesome-ctf",
      "cate": "Security"
    },
    {
      "name": "Malware Analysis",
      "url": "https://github.com/rshipp/awesome-malware-analysis",
      "cate": "Security"
    },
    {
      "name": "Android Security",
      "url": "https://github.com/ashishb/android-security-awesome",
      "cate": "Security"
    },
    {
      "name": "Hacking",
      "url": "https://github.com/carpedm20/awesome-hacking",
      "cate": "Security"
    },
    {
      "name": "Honeypots",
      "url": "https://github.com/paralax/awesome-honeypots",
      "cate": "Security"
    }
  ],
  "Miscellaneous": [
    {
      "name": "JSON",
      "url": "https://github.com/burningtree/awesome-json",
      "cate": "Miscellaneous"
    },
    {
      "name": "Discounts for Student Developers",
      "url": "https://github.com/najela/discount-for-student-dev",
      "cate": "Miscellaneous"
    },
    {
      "name": "Slack",
      "url": "https://github.com/matiassingers/awesome-slack",
      "cate": "Miscellaneous"
    },
    {
      "name": "Conferences",
      "url": "https://github.com/RichardLitt/awesome-conferences",
      "cate": "Miscellaneous"
    },
    {
      "name": "GeoJSON",
      "url": "https://github.com/tmcw/awesome-geojson",
      "cate": "Miscellaneous"
    },
    {
      "name": "Sysadmin",
      "url": "https://github.com/n1trux/awesome-sysadmin",
      "cate": "Miscellaneous"
    },
    {
      "name": "Radio",
      "url": "https://github.com/kyleterry/awesome-radio",
      "cate": "Miscellaneous"
    },
    {
      "name": "Awesome",
      "url": "https://github.com/sindresorhus/awesome",
      "cate": "Miscellaneous"
    },
    {
      "name": "Analytics",
      "url": "https://github.com/onurakpolat/awesome-analytics",
      "cate": "Miscellaneous"
    },
    {
      "name": "FOSS for Developers",
      "url": "https://github.com/httpsGithubParty/FOSS-for-Dev",
      "cate": "Miscellaneous"
    },
    {
      "name": "GitHub Cheat Sheet",
      "url": "https://github.com/tiimgreen/github-cheat-sheet",
      "cate": "Miscellaneous"
    },
    {
      "name": "Open Companies",
      "url": "https://github.com/opencompany/awesome-open-company",
      "cate": "Miscellaneous"
    },
    {
      "name": "REST",
      "url": "https://github.com/marmelab/awesome-rest",
      "cate": "Miscellaneous"
    },
    {
      "name": "Selenium",
      "url": "https://github.com/christian-bromann/awesome-selenium",
      "cate": "Miscellaneous"
    },
    {
      "name": "Endangered Languages",
      "url": "https://github.com/RichardLitt/endangered-languages",
      "cate": "Miscellaneous"
    },
    {
      "name": "Slack Communities",
      "url": "https://github.com/filipelinhares/awesome-slack",
      "cate": "Miscellaneous"
    },
    {
      "name": "Continuous Delivery",
      "url": "https://github.com/ciandcd/awesome-ciandcd",
      "cate": "Miscellaneous"
    },
    {
      "name": "Services Engineering",
      "url": "https://github.com/mmcgrana/services-engineering",
      "cate": "Miscellaneous"
    },
    {
      "name": "Free for Developers",
      "url": "https://github.com/ripienaar/free-for-dev",
      "cate": "Miscellaneous"
    },
    {
      "name": "Bitcoin",
      "url": "https://github.com/igorbarinov/awesome-bitcoin/",
      "cate": "Miscellaneous"
    },
    {
      "name": "Answers",
      "url": "https://github.com/jugoncalves/awesome-answers",
      "cate": "Miscellaneous"
    },
    {
      "name": "Sketch",
      "url": "https://github.com/diessica/awesome-sketch",
      "cate": "Miscellaneous"
    },
    {
      "name": "Places to Post Your Startup",
      "url": "https://github.com/mmccaff/PlacesToPostYourStartup",
      "cate": "Miscellaneous"
    },
    {
      "name": "Maintainance Modules",
      "url": "https://github.com/maxogden/maintenance-modules",
      "cate": "Miscellaneous"
    },
    {
      "name": "PCAPTools",
      "url": "https://github.com/caesar0301/awesome-pcaptools",
      "cate": "Miscellaneous"
    },
    {
      "name": "Remote Jobs",
      "url": "https://github.com/lukasz-madon/awesome-remote-job",
      "cate": "Miscellaneous"
    },
    {
      "name": "Boilerplate Projects",
      "url": "https://github.com/melvin0008/awesome-projects-boilerplates",
      "cate": "Miscellaneous"
    },
    {
      "name": "Mad Science Modules",
      "url": "https://github.com/feross/awesome-mad-science",
      "cate": "Miscellaneous"
    },
    {
      "name": "Readme",
      "url": "https://github.com/matiassingers/awesome-readme",
      "cate": "Miscellaneous"
    },
    {
      "name": "Tools",
      "url": "https://github.com/cjbarber/ToolsOfTheTrade",
      "cate": "Miscellaneous"
    },
    {
      "name": "Styleguides",
      "url": "https://github.com/RichardLitt/awesome-styleguides",
      "cate": "Miscellaneous"
    },
    {
      "name": "Blogs",
      "url": "https://github.com/aleksandar-todorovic/awesome-blogs",
      "cate": "Miscellaneous"
    },
    {
      "name": "Design and Development Guides",
      "url": "https://github.com/NARKOZ/guides",
      "cate": "Miscellaneous"
    },
    {
      "name": "Software Engineering Blogs",
      "url": "https://github.com/kilimchoi/engineering-blogs",
      "cate": "Miscellaneous"
    },
    {
      "name": "Self Hosted",
      "url": "https://github.com/Kickball/awesome-selfhosted",
      "cate": "Miscellaneous"
    },
    {
      "name": "FOSS Production Apps",
      "url": "https://github.com/jwaterfaucett/awesome-foss-apps",
      "cate": "Miscellaneous"
    },
    {
      "name": "Gulp",
      "url": "https://github.com/alferov/awesome-gulp",
      "cate": "Miscellaneous"
    },
    {
      "name": "AMA",
      "url": "https://github.com/sindresorhus/amas",
      "cate": "Miscellaneous"
    },
    {
      "name": "AMA-answers",
      "url": "https://github.com/stoeffel/awesome-ama-answers",
      "cate": "Miscellaneous"
    },
    {
      "name": "GIF",
      "url": "https://github.com/ibaaj/awesome-gif",
      "cate": "Miscellaneous"
    },
    {
      "name": "Open Source Photography",
      "url": "https://github.com/ibaaj/awesome-OpenSourcePhotography/",
      "cate": "Miscellaneous"
    },
    {
      "name": "OpenGL",
      "url": "https://github.com/eug/awesome-opengl",
      "cate": "Miscellaneous"
    },
    {
      "name": "JavaScript Standard Style",
      "url": "https://github.com/feross/awesome-standard",
      "cate": "Miscellaneous"
    },
    {
      "name": "Productivity",
      "url": "https://github.com/jyguyomarch/awesome-productivity",
      "cate": "Miscellaneous"
    },
    {
      "name": "GraphQL",
      "url": "https://github.com/chentsulin/awesome-graphql",
      "cate": "Miscellaneous"
    },
    {
      "name": "Transit",
      "url": "https://github.com/luqmaan/awesome-transit",
      "cate": "Miscellaneous"
    },
    {
      "name": "Research Tools",
      "url": "https://github.com/emptymalei/awesome-research",
      "cate": "Miscellaneous"
    },
    {
      "name": "Niche Job Boards",
      "url": "https://github.com/wfhio/awesome-job-boards",
      "cate": "Miscellaneous"
    },
    {
      "name": "Data Visualization",
      "url": "https://github.com/fasouto/awesome-dataviz",
      "cate": "Miscellaneous"
    },
    {
      "name": "Social Media Share Links",
      "url": "https://github.com/vinkla/share-links",
      "cate": "Miscellaneous"
    },
    {
      "name": "JSON Datasets",
      "url": "https://github.com/jdorfman/awesome-json-datasets",
      "cate": "Miscellaneous"
    },
    {
      "name": "Microservices",
      "url": "https://github.com/mfornos/awesome-microservices",
      "cate": "Miscellaneous"
    },
    {
      "name": "GitHub",
      "url": "https://github.com/phillipadsmith/awesome-github",
      "cate": "Miscellaneous"
    },
    {
      "name": "Unicode Code Points",
      "url": "https://github.com/Codepoints/awesome-codepoints",
      "cate": "Miscellaneous"
    },
    {
      "name": "Internet of Things",
      "url": "https://github.com/HQarroum/awesome-iot",
      "cate": "Miscellaneous"
    },
    {
      "name": "Open Source Documents",
      "url": "https://github.com/nacyot/awesome-opensource-documents",
      "cate": "Miscellaneous"
    },
    {
      "name": "Umbraco",
      "url": "https://github.com/leekelleher/awesome-umbraco",
      "cate": "Miscellaneous"
    }
  ]
}
;
}, {}],
3: [function(require, module, exports) {
module.exports = {
  "Mad science": [
    {
      "name": "webtorrent",
      "url": "https://github.com/feross/webtorrent",
      "description": "Streaming torrent client for Node.js and the browser.",
      "cate": "Mad science"
    },
    {
      "name": "GitTorrent",
      "url": "https://github.com/cjb/GitTorrent",
      "description": "Peer-to-peer network of Git repositories being shared over BitTorrent.",
      "cate": "Mad science"
    },
    {
      "name": "peerflix",
      "url": "https://github.com/mafintosh/peerflix",
      "description": "Streaming torrent client.",
      "cate": "Mad science"
    },
    {
      "name": "dat",
      "url": "http://dat-data.com",
      "description": "Real-time replication and versioning for data sets.",
      "cate": "Mad science"
    },
    {
      "name": "ipfs",
      "url": "https://github.com/jbenet/node-ipfs",
      "description": "Distributed file system that seeks to connect all computing devices with the same system of files.",
      "cate": "Mad science"
    },
    {
      "name": "stackgl",
      "url": "http://stack.gl",
      "description": "Open software ecosystem for WebGL, built on top of browserify and npm.",
      "cate": "Mad science"
    },
    {
      "name": "peerwiki",
      "url": "https://github.com/mafintosh/peerwiki",
      "description": "All of Wikipedia on BitTorrent.",
      "cate": "Mad science"
    },
    {
      "name": "peercast",
      "url": "https://github.com/mafintosh/peercast",
      "description": "Stream a torrent video to Chromecast.",
      "cate": "Mad science"
    },
    {
      "name": "BitcoinJS",
      "url": "http://bitcoinjs.org",
      "description": "Clean, readable, proven Bitcoin library.",
      "cate": "Mad science"
    },
    {
      "name": "Bitcore",
      "url": "http://bitcore.io",
      "description": "A pure and powerful Bitcoin library.",
      "cate": "Mad science"
    },
    {
      "name": "PDFKit",
      "url": "http://pdfkit.org",
      "description": "PDF generation library.",
      "cate": "Mad science"
    },
    {
      "name": "turf",
      "url": "https://github.com/Turfjs/turf",
      "description": "Modular geospatial processing and analysis engine.",
      "cate": "Mad science"
    },
    {
      "name": "webcat",
      "url": "https://github.com/mafintosh/webcat",
      "description": "p2p pipe across the web using WebRTC that uses your GitHub private/public key for authentication.",
      "cate": "Mad science"
    },
    {
      "name": "js-git",
      "url": "https://github.com/creationix/js-git",
      "description": "JavaScript implementation of Git.",
      "cate": "Mad science"
    },
    {
      "name": "NodeOS",
      "url": "http://node-os.com",
      "description": "The first operating system powered by npm.",
      "cate": "Mad science"
    },
    {
      "name": "limdu",
      "url": "https://github.com/erelsgl/limdu",
      "description": "Machine-learning framework.",
      "cate": "Mad science"
    },
    {
      "name": "Cytoscape.js",
      "url": "http://js.cytoscape.org",
      "description": "Graph theory (a.k.a. network) modeling and analysis.",
      "cate": "Mad science"
    }
  ],
  "Command-line apps": [
    {
      "name": "pageres",
      "url": "https://github.com/sindresorhus/pageres",
      "description": "Capture website screenshots.",
      "cate": "Command-line apps"
    },
    {
      "name": "trash",
      "url": "https://github.com/sindresorhus/trash",
      "description": "A safer alternative to `rm`.",
      "cate": "Command-line apps"
    },
    {
      "name": "npm-name",
      "url": "https://github.com/sindresorhus/npm-name",
      "description": "Check whether a package name is available on npm.",
      "cate": "Command-line apps"
    },
    {
      "name": "XO",
      "url": "https://github.com/sindresorhus/xo",
      "description": "Enforce strict code style using the JavaScript happiness style.",
      "cate": "Command-line apps"
    },
    {
      "name": "speed-test",
      "url": "https://github.com/sindresorhus/speed-test",
      "description": "Test your internet connection speed and ping.",
      "cate": "Command-line apps"
    },
    {
      "name": "np",
      "url": "https://github.com/sindresorhus/np",
      "description": "A better `npm publish`.",
      "cate": "Command-line apps"
    },
    {
      "name": "yo",
      "url": "https://github.com/yeoman/yo",
      "description": "Run Yeoman generators.",
      "cate": "Command-line apps"
    },
    {
      "name": "ESLint",
      "url": "http://eslint.org",
      "description": "The pluggable linting utility for JavaScript.",
      "cate": "Command-line apps"
    },
    {
      "name": "JSCS",
      "url": "https://github.com/jscs-dev/node-jscs",
      "description": "JavaScript Code Style checker.",
      "cate": "Command-line apps"
    },
    {
      "name": "Standard",
      "url": "https://github.com/feross/standard",
      "description": "JavaScript Standard Style — One style to rule them all.",
      "cate": "Command-line apps"
    },
    {
      "name": "cpy",
      "url": "https://github.com/sindresorhus/cpy",
      "description": "Copy files.",
      "cate": "Command-line apps"
    },
    {
      "name": "fkill",
      "url": "https://github.com/sindresorhus/fkill-cli",
      "description": "Fabulously kill processes. Cross-platform.",
      "cate": "Command-line apps"
    },
    {
      "name": "vantage",
      "url": "https://github.com/dthree/vantage",
      "description": "Distributed, realtime CLI for your live app.",
      "cate": "Command-line apps"
    },
    {
      "name": "vtop",
      "url": "https://github.com/MrRio/vtop",
      "description": "More better top, with nice charts.",
      "cate": "Command-line apps"
    },
    {
      "name": "tmpin",
      "url": "https://github.com/sindresorhus/tmpin",
      "description": "Adds stdin support to any CLI app that accepts file input.",
      "cate": "Command-line apps"
    },
    {
      "name": "empty-trash",
      "url": "https://github.com/sindresorhus/empty-trash",
      "description": "Empty the trash.",
      "cate": "Command-line apps"
    },
    {
      "name": "is-up",
      "url": "https://github.com/sindresorhus/is-up",
      "description": "Check whether a website is up or down.",
      "cate": "Command-line apps"
    },
    {
      "name": "is-online",
      "url": "https://github.com/sindresorhus/is-online",
      "description": "Check if the internet connection is up.",
      "cate": "Command-line apps"
    },
    {
      "name": "public-ip",
      "url": "https://github.com/sindresorhus/public-ip",
      "description": "Get your public IP address.",
      "cate": "Command-line apps"
    },
    {
      "name": "dark-mode",
      "url": "https://github.com/sindresorhus/dark-mode",
      "description": "Toggle the OS X Dark Mode.",
      "cate": "Command-line apps"
    },
    {
      "name": "ttystudio",
      "url": "https://github.com/chjj/ttystudio",
      "description": "Record your terminal and compile it to a GIF or APNG without any external dependencies, bash scripts, gif concatenation, etc.",
      "cate": "Command-line apps"
    },
    {
      "name": "David",
      "url": "https://github.com/alanshaw/david",
      "description": "Tells you when your package npm dependencies are out of date.",
      "cate": "Command-line apps"
    },
    {
      "name": "http-server",
      "url": "https://github.com/nodeapps/http-server",
      "description": "Simple, zero-config command-line HTTP server.",
      "cate": "Command-line apps"
    },
    {
      "name": "Live Server",
      "url": "https://github.com/tapio/live-server",
      "description": "A simple development HTTP-server with livereload capability.",
      "cate": "Command-line apps"
    },
    {
      "name": "bcat",
      "url": "https://github.com/kessler/node-bcat",
      "description": "Pipe command output to web browsers.",
      "cate": "Command-line apps"
    },
    {
      "name": "normit",
      "url": "https://github.com/pawurb/normit",
      "description": "Google Translate with speech synthesis in your terminal.",
      "cate": "Command-line apps"
    },
    {
      "name": "slap",
      "url": "https://github.com/slap-editor/slap",
      "description": "Sublime-like terminal-based text editor.",
      "cate": "Command-line apps"
    },
    {
      "name": "jsinspect",
      "url": "https://github.com/danielstjules/jsinspect",
      "description": "Detect copy-pasted and structurally similar code.",
      "cate": "Command-line apps"
    },
    {
      "name": "esformatter",
      "url": "https://github.com/millermedeiros/esformatter",
      "description": "JavaScript code beautifier/formatter.",
      "cate": "Command-line apps"
    },
    {
      "name": "pjs",
      "url": "https://github.com/danielstjules/pjs",
      "description": "Pipeable JavaScript. Quickly filter, map, and reduce from the terminal.",
      "cate": "Command-line apps"
    },
    {
      "name": "license-checker",
      "url": "https://github.com/davglass/license-checker",
      "description": "Check licenses of your app's dependencies.",
      "cate": "Command-line apps"
    },
    {
      "name": "browser-run",
      "url": "https://github.com/juliangruber/browser-run",
      "description": "Easily run code in a browser environment.",
      "cate": "Command-line apps"
    },
    {
      "name": "modhelp",
      "url": "https://github.com/runvnc/modhelp",
      "description": "Syntax-highlighted module READMEs in terminal with ANSI-friendly pager.",
      "cate": "Command-line apps"
    },
    {
      "name": "wifi-password",
      "url": "https://github.com/kevva/wifi-password",
      "description": "Get the current wifi password.",
      "cate": "Command-line apps"
    },
    {
      "name": "wallpaper",
      "url": "https://github.com/sindresorhus/wallpaper",
      "description": "Change the desktop wallpaper.",
      "cate": "Command-line apps"
    },
    {
      "name": "brightness",
      "url": "https://github.com/kevva/brightness-cli",
      "description": "Change the screen brightness.",
      "cate": "Command-line apps"
    },
    {
      "name": "torrent",
      "url": "https://github.com/maxogden/torrent",
      "description": "Download torrents.",
      "cate": "Command-line apps"
    },
    {
      "name": "tfa",
      "url": "https://github.com/jasnell/tfa",
      "description": "Two-factor authentication client.",
      "cate": "Command-line apps"
    },
    {
      "name": "rtail",
      "url": "https://github.com/kilianc/rtail",
      "description": "Terminal output to the browser in seconds, using UNIX pipes.",
      "cate": "Command-line apps"
    },
    {
      "name": "kill-tabs",
      "url": "https://github.com/sindresorhus/kill-tabs",
      "description": "Kill all Chrome tabs to improve performance, decrease battery usage, and save memory.",
      "cate": "Command-line apps"
    },
    {
      "name": "alex",
      "url": "https://github.com/wooorm/alex",
      "description": "Catch insensitive, inconsiderate writing.",
      "cate": "Command-line apps"
    },
    {
      "name": "pen",
      "url": "https://github.com/noraesae/pen",
      "description": "Live Markdown preview in the browser from your favorite editor.",
      "cate": "Command-line apps"
    },
    {
      "name": "subdownloader",
      "url": "https://github.com/beatfreaker/subdownloader",
      "description": "Subtitle downloader for movies and TV series.",
      "cate": "Command-line apps"
    },
    {
      "name": "iponmap",
      "url": "https://github.com/nogizhopaboroda/iponmap",
      "description": "IP location finder.",
      "cate": "Command-line apps"
    }
  ],
  "Functional programming": [
    {
      "name": "lodash",
      "url": "http://lodash.com",
      "description": "A utility library delivering consistency, customization, performance, & extras. A better and faster Underscore.js.",
      "cate": "Functional programming"
    },
    {
      "name": "immutable",
      "url": "https://github.com/facebook/immutable-js",
      "description": "Immutable data collections.",
      "cate": "Functional programming"
    },
    {
      "name": "mori",
      "url": "http://swannodette.github.io/mori/",
      "description": "A library for using ClojureScript's persistent data structures and supporting API from the comfort of vanilla JavaScript.",
      "cate": "Functional programming"
    },
    {
      "name": "Ramda",
      "url": "http://ramdajs.com",
      "description": "A utility library with a focus on flexible functional composition enabled by automatic currying and reversed argument order. Avoids mutating data.",
      "cate": "Functional programming"
    },
    {
      "name": "Folktale",
      "url": "http://folktale.github.io",
      "description": "A suite of libraries for generic functional programming in JavaScript that allows you to write elegant, modular applications with fewer bugs, and more reuse.",
      "cate": "Functional programming"
    },
    {
      "name": "underscore-contrib",
      "url": "http://documentcloud.github.io/underscore-contrib/",
      "description": "The brass buckles on Underscore's utility belt.",
      "cate": "Functional programming"
    },
    {
      "name": "Mout",
      "url": "http://moutjs.com",
      "description": "Utility library with the biggest difference between other existing solutions is that you can choose to load only the modules/functions that you need, no extra overhead.",
      "cate": "Functional programming"
    },
    {
      "name": "Bacon.js",
      "url": "http://baconjs.github.io",
      "description": "Functional reactive programming.",
      "cate": "Functional programming"
    },
    {
      "name": "RxJS",
      "url": "http://reactivex.io",
      "description": "Functional reactive library for transforming, composing, and querying various kinds of data.",
      "cate": "Functional programming"
    },
    {
      "name": "Lazy.js",
      "url": "https://github.com/dtao/lazy.js",
      "description": "Utility library similar to lodash/Underscore but with lazy evaluation, which can translate to superior performance in many cases.",
      "cate": "Functional programming"
    }
  ],
  "HTTP": [
    {
      "name": "got",
      "url": "https://github.com/sindresorhus/got",
      "description": "A nicer interface to the built-in `http` module.",
      "cate": "HTTP"
    },
    {
      "name": "gh-got",
      "url": "https://github.com/sindresorhus/gh-got",
      "description": "Convenience wrapper for `got` to interact with the GitHub API.",
      "cate": "HTTP"
    },
    {
      "name": "request",
      "url": "https://github.com/mikeal/request",
      "description": "Simplified HTTP request client.",
      "cate": "HTTP"
    },
    {
      "name": "Nock",
      "url": "https://github.com/pgte/nock",
      "description": "A HTTP mocking and expectations library.",
      "cate": "HTTP"
    },
    {
      "name": "hyperquest",
      "url": "https://github.com/substack/hyperquest",
      "description": "Streaming HTTP requests.",
      "cate": "HTTP"
    },
    {
      "name": "axios",
      "url": "https://github.com/mzabriskie/axios",
      "description": "Promise based HTTP client (works in the browser too).",
      "cate": "HTTP"
    },
    {
      "name": "spdy",
      "url": "https://github.com/indutny/node-spdy",
      "description": "Creates SPDY servers with the same API as the built-in `https` module.",
      "cate": "HTTP"
    },
    {
      "name": "wreck",
      "url": "https://github.com/hapijs/wreck",
      "description": "HTTP Client Utilities.",
      "cate": "HTTP"
    },
    {
      "name": "download",
      "url": "https://github.com/kevva/download",
      "description": "Download and extract files effortlessly.",
      "cate": "HTTP"
    },
    {
      "name": "http-proxy",
      "url": "https://github.com/nodejitsu/node-http-proxy",
      "description": "A full-featured HTTP proxy.",
      "cate": "HTTP"
    },
    {
      "name": "rocky",
      "url": "https://github.com/h2non/rocky",
      "description": "Featured, middleware-oriented HTTP proxy with traffic replay and intercept.",
      "cate": "HTTP"
    },
    {
      "name": "superagent",
      "url": "https://github.com/visionmedia/superagent",
      "description": "A small progressive HTTP request library.",
      "cate": "HTTP"
    }
  ],
  "Debugging / Profiling": [
    {
      "name": "ironNode",
      "url": "https://github.com/s-a/iron-node",
      "description": "Node.js debugger supporting ES2015 out of the box.",
      "cate": "Debugging / Profiling"
    },
    {
      "name": "node-inspector",
      "url": "https://github.com/node-inspector/node-inspector",
      "description": "Debugger based on Blink Developer Tools.",
      "cate": "Debugging / Profiling"
    },
    {
      "name": "Theseus",
      "url": "https://github.com/adobe-research/theseus",
      "description": "A new type of JavaScript debugger featuring real-time code coverage, retroactive inspection and asynchronous call tree.",
      "cate": "Debugging / Profiling"
    },
    {
      "name": "longjohn",
      "url": "https://github.com/mattinsler/longjohn",
      "description": "Long stack traces with configurable call trace length.",
      "cate": "Debugging / Profiling"
    },
    {
      "name": "debug",
      "url": "https://github.com/visionmedia/debug",
      "description": "Tiny debugging utility.",
      "cate": "Debugging / Profiling"
    },
    {
      "name": "jstrace",
      "url": "https://github.com/jstrace/jstrace",
      "description": "Dynamic tracing for JavaScript, similar to dtrace, ktap etc.",
      "cate": "Debugging / Profiling"
    },
    {
      "name": "njsTrace",
      "url": "https://github.com/valyouw/njstrace",
      "description": "Instrument and trace your code, see all function calls, arguments, return values, as well as the time spent in each function.",
      "cate": "Debugging / Profiling"
    },
    {
      "name": "vstream",
      "url": "https://github.com/joyent/node-vstream",
      "description": "Instrumentable streams mix-ins to inspect a pipeline of streams.",
      "cate": "Debugging / Profiling"
    },
    {
      "name": "stackman",
      "url": "https://github.com/watson/stackman",
      "description": "Enhance an error stacktrace with code excerpts and other goodies.",
      "cate": "Debugging / Profiling"
    },
    {
      "name": "TraceGL",
      "url": "https://github.com/traceglMPL/tracegl",
      "description": "Transforms your JavaScript, injecting monitoring code that produces a log of everything that happens.",
      "cate": "Debugging / Profiling"
    },
    {
      "name": "locus",
      "url": "https://github.com/alidavut/locus",
      "description": "Starts a REPL at runtime that has access to all variables.",
      "cate": "Debugging / Profiling"
    }
  ],
  "Logging": [
    {
      "name": "winston",
      "url": "https://github.com/flatiron/winston",
      "description": "A multi-transport async logging library.",
      "cate": "Logging"
    },
    {
      "name": "Bunyan",
      "url": "https://github.com/trentm/node-bunyan",
      "description": "A simple and fast JSON logging library.",
      "cate": "Logging"
    },
    {
      "name": "intel",
      "url": "https://seanmonstar.github.io/intel",
      "description": "A comprehensive logging library (handlers, filters, formatters, console injection).",
      "cate": "Logging"
    },
    {
      "name": "console-log-level",
      "url": "https://github.com/watson/console-log-level",
      "description": "The most simple logger imaginable with support for log levels and custom prefixes.",
      "cate": "Logging"
    }
  ],
  "Command-line utilities": [
    {
      "name": "chalk",
      "url": "https://github.com/sindresorhus/chalk",
      "description": "Terminal string styling done right.",
      "cate": "Command-line utilities"
    },
    {
      "name": "meow",
      "url": "https://github.com/sindresorhus/meow",
      "description": "CLI app helper.",
      "cate": "Command-line utilities"
    },
    {
      "name": "minimist",
      "url": "https://github.com/substack/minimist",
      "description": "Parse command-line flags.",
      "cate": "Command-line utilities"
    },
    {
      "name": "get-stdin",
      "url": "https://github.com/sindresorhus/get-stdin",
      "description": "Easier stdin.",
      "cate": "Command-line utilities"
    },
    {
      "name": "user-home",
      "url": "https://github.com/sindresorhus/user-home",
      "description": "Get the path to the user home directory.",
      "cate": "Command-line utilities"
    },
    {
      "name": "log-update",
      "url": "https://github.com/sindresorhus/log-update",
      "description": "Log by overwriting the previous output in the terminal. Useful for rendering progress bars, animations, etc.",
      "cate": "Command-line utilities"
    },
    {
      "name": "Inquirer.js",
      "url": "https://github.com/SBoudrias/Inquirer.js",
      "description": "Interactive command-line prompt.",
      "cate": "Command-line utilities"
    },
    {
      "name": "update-notifier",
      "url": "https://github.com/yeoman/update-notifier",
      "description": "Update notifications for your CLI app.",
      "cate": "Command-line utilities"
    },
    {
      "name": "ansi-escapes",
      "url": "https://github.com/sindresorhus/ansi-escapes",
      "description": "ANSI escape codes for manipulating the terminal.",
      "cate": "Command-line utilities"
    },
    {
      "name": "sudo-block",
      "url": "https://github.com/sindresorhus/sudo-block",
      "description": "Block users from running your app with root permissions.",
      "cate": "Command-line utilities"
    },
    {
      "name": "configstore",
      "url": "https://github.com/yeoman/configstore",
      "description": "Easily load and persist config without having to think about where and how.",
      "cate": "Command-line utilities"
    },
    {
      "name": "insight",
      "url": "https://github.com/yeoman/insight",
      "description": "Helps you understand how your tool is being used by anonymously reporting usage metrics to Google Analytics.",
      "cate": "Command-line utilities"
    },
    {
      "name": "log-symbols",
      "url": "https://github.com/sindresorhus/log-symbols",
      "description": "Colored symbols for various log levels.",
      "cate": "Command-line utilities"
    },
    {
      "name": "figures",
      "url": "https://github.com/sindresorhus/figures",
      "description": "Unicode symbols with Windows CMD fallbacks.",
      "cate": "Command-line utilities"
    },
    {
      "name": "string-width",
      "url": "https://github.com/sindresorhus/string-width",
      "description": "Get the visual width of a string - the number of columns required to display it.",
      "cate": "Command-line utilities"
    },
    {
      "name": "first-run",
      "url": "https://github.com/sindresorhus/first-run",
      "description": "Check if it's the first time the process is run.",
      "cate": "Command-line utilities"
    },
    {
      "name": "sparkly",
      "url": "https://github.com/sindresorhus/sparkly",
      "description": "Generate sparklines ▁▂▃▅▂▇",
      "cate": "Command-line utilities"
    },
    {
      "name": "vorpal",
      "url": "https://github.com/dthree/vorpal",
      "description": "A framework for interactive CLI apps.",
      "cate": "Command-line utilities"
    },
    {
      "name": "blessed",
      "url": "https://github.com/chjj/blessed",
      "description": "A curses-like library.",
      "cate": "Command-line utilities"
    },
    {
      "name": "yn",
      "url": "https://github.com/sindresorhus/yn",
      "description": "Parse yes/no like values.",
      "cate": "Command-line utilities"
    },
    {
      "name": "cli-table",
      "url": "https://github.com/LearnBoost/cli-table",
      "description": "Pretty unicode tables.",
      "cate": "Command-line utilities"
    },
    {
      "name": "drawille",
      "url": "https://github.com/madbence/node-drawille",
      "description": "Draw on the terminal with unicode braille characters.",
      "cate": "Command-line utilities"
    },
    {
      "name": "googleauth",
      "url": "https://github.com/maxogden/googleauth",
      "description": "Create and load persistent Google authentication tokens for command-line apps.",
      "cate": "Command-line utilities"
    },
    {
      "name": "ascii-charts",
      "url": "https://github.com/jstrace/chart",
      "description": "ASCII bar chart in the terminal.",
      "cate": "Command-line utilities"
    },
    {
      "name": "progress",
      "url": "https://github.com/visionmedia/node-progress",
      "description": "Flexible ascii progress bar.",
      "cate": "Command-line utilities"
    },
    {
      "name": "cli-cursor",
      "url": "https://github.com/sindresorhus/cli-cursor",
      "description": "Toggle the CLI cursor.",
      "cate": "Command-line utilities"
    },
    {
      "name": "columnify",
      "url": "https://github.com/timoxley/columnify",
      "description": "Create text-based columns suitable for console output. Supports cell wrapping.",
      "cate": "Command-line utilities"
    },
    {
      "name": "cfonts",
      "url": "https://github.com/dominikwilkowski/cfonts",
      "description": "Sexy ASCII fonts for the console.",
      "cate": "Command-line utilities"
    }
  ],
  "Build tools": [
    {
      "name": "gulp",
      "url": "http://gulpjs.com",
      "description": "Streaming and fast build system that favors code over config.",
      "cate": "Build tools"
    },
    {
      "name": "Broccoli",
      "url": "https://github.com/broccolijs/broccoli",
      "description": "A fast, reliable asset pipeline, supporting constant-time rebuilds and compact build definitions.",
      "cate": "Build tools"
    },
    {
      "name": "browserify",
      "url": "https://github.com/substack/node-browserify",
      "description": "Browser-side require() the Node.js way.",
      "cate": "Build tools"
    },
    {
      "name": "webpack",
      "url": "https://github.com/webpack/webpack",
      "description": "Packs CommonJS/AMD modules for the browser.",
      "cate": "Build tools"
    },
    {
      "name": "Brunch",
      "url": "https://github.com/brunch/brunch",
      "description": "Front-end web app build tool with simple declarative config, fast incremental compilation, and an opinionated workflow.",
      "cate": "Build tools"
    },
    {
      "name": "strong-build",
      "url": "https://github.com/strongloop/strong-build",
      "description": "Build a node app package and prepare to deploy it as a package to production or use git to commit to a deploy branch.",
      "cate": "Build tools"
    },
    {
      "name": "grunt",
      "url": "http://gruntjs.com",
      "description": "Task runner that can perform repetitive tasks like minification, compilation, unit testing, linting, etc.",
      "cate": "Build tools"
    }
  ],
  "Hardware": [
    {
      "name": "johnny-five",
      "url": "https://github.com/rwaldron/johnny-five",
      "description": "Firmata based Arduino Framework.",
      "cate": "Hardware"
    },
    {
      "name": "serialport",
      "url": "https://github.com/voodootikigod/node-serialport",
      "description": "Access serial ports for reading and writing.",
      "cate": "Hardware"
    },
    {
      "name": "usb",
      "url": "https://github.com/nonolith/node-usb",
      "description": "USB library.",
      "cate": "Hardware"
    },
    {
      "name": "cylon.js",
      "url": "http://cylonjs.com",
      "description": "Next generation robotics framework with support for 26 different platforms.",
      "cate": "Hardware"
    },
    {
      "name": "i2c-bus",
      "url": "https://github.com/fivdi/i2c-bus",
      "description": "I2C serial bus access.",
      "cate": "Hardware"
    }
  ],
  "Templating": [
    {
      "name": "marko",
      "url": "https://github.com/marko-js/marko",
      "description": "A fast and lightweight HTML-based templating engine that compiles templates to CommonJS modules and supports streaming, async rendering and custom tags.",
      "cate": "Templating"
    },
    {
      "name": "nunjucks",
      "url": "https://github.com/mozilla/nunjucks",
      "description": "A powerful templating engine with inheritance, asynchronous control, and more (jinja2 inspired).",
      "cate": "Templating"
    },
    {
      "name": "handlebars.js",
      "url": "https://github.com/wycats/handlebars.js",
      "description": "A superset of Mustache templates which adds powerful features like helpers and more advanced blocks.",
      "cate": "Templating"
    },
    {
      "name": "hogan.js",
      "url": "http://twitter.github.io/hogan.js/",
      "description": "Twitter's small, fast, phase-separated compiler for Mustache templates.",
      "cate": "Templating"
    },
    {
      "name": "EJS",
      "url": "https://github.com/mde/ejs",
      "description": "Simple unopinionated templating language.",
      "cate": "Templating"
    },
    {
      "name": "Jade",
      "url": "https://github.com/visionmedia/jade",
      "description": "High-performance template engine heavily influenced by Haml.",
      "cate": "Templating"
    }
  ],
  "Web frameworks": [
    {
      "name": "Koa",
      "url": "http://koajs.com",
      "description": "A new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs.",
      "cate": "Web frameworks"
    },
    {
      "name": "Express",
      "url": "http://expressjs.com",
      "description": "A minimal and flexible web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.",
      "cate": "Web frameworks"
    },
    {
      "name": "Hapi",
      "url": "http://hapijs.com",
      "description": "A rich framework for building applications and services.",
      "cate": "Web frameworks"
    },
    {
      "name": "LoopBack",
      "url": "http://loopback.io",
      "description": "Powerful framework for creating REST APIs and easily connecting to backend data sources.",
      "cate": "Web frameworks"
    },
    {
      "name": "Meteor",
      "url": "https://www.meteor.com",
      "description": "An ultra-simple, database-everywhere, data-on-the-wire, pure-Javascript web framework. *(You might like [awesome-meteor](https://github.com/Urigo/awesome-meteor))*",
      "cate": "Web frameworks"
    },
    {
      "name": "SailsJS",
      "url": "http://sailsjs.org",
      "description": "An MVC web framework with a modern twist, supporting WebSockets, streams, and a data-driven API.",
      "cate": "Web frameworks"
    },
    {
      "name": "Restify",
      "url": "http://mcavage.me/node-restify/",
      "description": "A node framework built specifically to enable you to build correct REST web services.",
      "cate": "Web frameworks"
    },
    {
      "name": "Interfake",
      "url": "https://github.com/basicallydan/interfake",
      "description": "Rapid prototyping framework for making mock HTTP APIs, with a Node.js, command-line and HTTP interface.",
      "cate": "Web frameworks"
    },
    {
      "name": "Derby",
      "url": "https://github.com/derbyjs/derby",
      "description": "MVC framework, making it easy to write realtime, collaborative applications that run in both Node.js and browsers.",
      "cate": "Web frameworks"
    },
    {
      "name": "Restberry",
      "url": "http://restberry.com",
      "description": "Framework for setting up RESTful JSON APIs, applied to your database models without needing to write any code.",
      "cate": "Web frameworks"
    },
    {
      "name": "Catberry",
      "url": "http://catberry.org",
      "description": "Framework with Flux architecture, isomorphic web-components, and progressive rendering.",
      "cate": "Web frameworks"
    }
  ],
  "Documentation": [
    {
      "name": "Docco",
      "url": "http://jashkenas.github.io/docco/",
      "description": "A quick-and-dirty documentation generator which produces an HTML document that displays your comments intermingled with your code.",
      "cate": "Documentation"
    },
    {
      "name": "JSDoc",
      "url": "http://usejsdoc.org",
      "description": "API documentation generator similar to JavaDoc or PHPDoc.",
      "cate": "Documentation"
    },
    {
      "name": "dox",
      "url": "https://github.com/visionmedia/dox",
      "description": "JavaScript documentation generator using Markdown and JSDoc.",
      "cate": "Documentation"
    },
    {
      "name": "jsdox",
      "url": "https://github.com/sutoiku/jsdox",
      "description": "JSDoc3 to Markdown documentation generator.",
      "cate": "Documentation"
    },
    {
      "name": "apiDoc",
      "url": "https://github.com/apidoc/apidoc",
      "description": "Inline documentation for RESTful web APIs.",
      "cate": "Documentation"
    }
  ],
  "Filesystem": [
    {
      "name": "del",
      "url": "https://github.com/sindresorhus/del",
      "description": "Delete files/folders using globs.",
      "cate": "Filesystem"
    },
    {
      "name": "globby",
      "url": "https://github.com/sindresorhus/globby",
      "description": "Glob files with support for multiple patterns.",
      "cate": "Filesystem"
    },
    {
      "name": "cpy",
      "url": "https://github.com/sindresorhus/cpy",
      "description": "Copy files.",
      "cate": "Filesystem"
    },
    {
      "name": "rimraf",
      "url": "https://github.com/isaacs/rimraf",
      "description": "Recursively delete files like `rm -rf`.",
      "cate": "Filesystem"
    },
    {
      "name": "mkdirp",
      "url": "https://github.com/substack/node-mkdirp",
      "description": "Recursively create directories like `mkdir -p`.",
      "cate": "Filesystem"
    },
    {
      "name": "graceful-fs",
      "url": "https://github.com/isaacs/node-graceful-fs",
      "description": "Drop-in replacement for the `fs` module with various improvements.",
      "cate": "Filesystem"
    },
    {
      "name": "chokidar",
      "url": "https://github.com/paulmillr/chokidar",
      "description": "Filesystem watcher which stabilizes events from `fs.watch` and `fs.watchFile` as well as using native `fsevents` on OS X.",
      "cate": "Filesystem"
    },
    {
      "name": "find-up",
      "url": "https://github.com/sindresorhus/find-up",
      "description": "Find a file by walking up parent directories.",
      "cate": "Filesystem"
    },
    {
      "name": "load-json-file",
      "url": "https://github.com/sindresorhus/load-json-file",
      "description": "Read and parse a JSON file.",
      "cate": "Filesystem"
    },
    {
      "name": "write-json-file",
      "url": "https://github.com/sindresorhus/write-json-file",
      "description": "Stringify and write JSON to a file atomically.",
      "cate": "Filesystem"
    },
    {
      "name": "fs-write-stream-atomic",
      "url": "https://github.com/npm/fs-write-stream-atomic",
      "description": "Like `fs.createWriteStream()`, but atomic.",
      "cate": "Filesystem"
    },
    {
      "name": "filenamify",
      "url": "https://github.com/sindresorhus/filenamify",
      "description": "Convert a string to a valid filename.",
      "cate": "Filesystem"
    },
    {
      "name": "lnfs",
      "url": "https://github.com/kevva/lnfs",
      "description": "Force create symlinks like `ln -fs`.",
      "cate": "Filesystem"
    },
    {
      "name": "istextorbinary",
      "url": "https://github.com/bevry/istextorbinary",
      "description": "Check if a file is text or binary.",
      "cate": "Filesystem"
    },
    {
      "name": "fs-jetpack",
      "url": "https://github.com/szwacz/fs-jetpack",
      "description": "Completely redesigned file system API for convenience in everyday use.",
      "cate": "Filesystem"
    },
    {
      "name": "fs-extra",
      "url": "https://github.com/jprichardson/node-fs-extra",
      "description": "Extra methods for the `fs` module.",
      "cate": "Filesystem"
    },
    {
      "name": "pkg-dir",
      "url": "https://github.com/sindresorhus/pkg-dir",
      "description": "Find the root directory of a npm package.",
      "cate": "Filesystem"
    }
  ],
  "Control flow": [
    {
      "name": "Bluebird",
      "url": "https://github.com/petkaantonov/bluebird",
      "description": "A fully featured promise library with focus on innovative features and performance.",
      "cate": "Control flow"
    },
    {
      "name": "pinkie-promise",
      "url": "https://github.com/floatdrop/pinkie-promise",
      "description": "Promise ponyfill.",
      "cate": "Control flow"
    },
    {
      "name": "pify",
      "url": "https://github.com/sindresorhus/pify",
      "description": "Promisify a callback-style function.",
      "cate": "Control flow"
    },
    {
      "name": "each-async",
      "url": "https://github.com/sindresorhus/each-async",
      "description": "Async concurrent iterator like forEach.",
      "cate": "Control flow"
    },
    {
      "name": "async",
      "url": "https://github.com/caolan/async",
      "description": "Provides straight-forward, powerful functions for working with asynchronicity.",
      "cate": "Control flow"
    },
    {
      "name": "async-chainable",
      "url": "https://github.com/hash-bang/async-chainable",
      "description": "Chainable, pluggable async functionality.",
      "cate": "Control flow"
    },
    {
      "name": "after-all-results",
      "url": "https://github.com/watson/after-all-results",
      "description": "Bundle results of async functions calls into one callback with all the results.",
      "cate": "Control flow"
    },
    {
      "name": "co",
      "url": "https://github.com/visionmedia/co",
      "description": "The ultimate generator based flow-control goodness.",
      "cate": "Control flow"
    },
    {
      "name": "suspend",
      "url": "https://github.com/jmar777/suspend",
      "description": "Generator-based control flow that plays nice with callbacks, promises, and thunks.",
      "cate": "Control flow"
    },
    {
      "name": "bluebird-co",
      "url": "https://github.com/novacrazy/bluebird-co",
      "description": "A set of high performance yield handlers for Bluebird coroutines.",
      "cate": "Control flow"
    },
    {
      "name": "Highland.js",
      "url": "http://highlandjs.org",
      "description": "Manages synchronous and asynchronous code easily, using nothing more than standard JavaScript and Node-like Streams.",
      "cate": "Control flow"
    },
    {
      "name": "js-csp",
      "url": "https://github.com/jlongster/js-csp",
      "description": "Communicating sequential processes for JavaScript (like Clojurescript core.async, or Go).",
      "cate": "Control flow"
    },
    {
      "name": "zone",
      "url": "https://github.com/strongloop/zone",
      "description": "Provides a way to group and track resources and errors across asynchronous operations.",
      "cate": "Control flow"
    }
  ],
  "Streams": [
    {
      "name": "through2",
      "url": "https://github.com/rvagg/through2",
      "description": "Tiny wrapper around streams2 Transform to avoid explicit subclassing noise.",
      "cate": "Streams"
    },
    {
      "name": "from2",
      "url": "https://github.com/hughsk/from2",
      "description": "Convenience wrapper for ReadableStream, inspired by `through2`.",
      "cate": "Streams"
    },
    {
      "name": "get-stream",
      "url": "https://github.com/sindresorhus/get-stream",
      "description": "Get a stream as a string or buffer.",
      "cate": "Streams"
    },
    {
      "name": "concat-stream",
      "url": "https://github.com/maxogden/concat-stream",
      "description": "Concatenates a stream into strings or binary data.",
      "cate": "Streams"
    },
    {
      "name": "into-stream",
      "url": "https://github.com/sindresorhus/into-stream",
      "description": "Convert a buffer/string/array/object into a stream.",
      "cate": "Streams"
    },
    {
      "name": "duplexify",
      "url": "https://github.com/mafintosh/duplexify",
      "description": "Turn a writeable and readable stream into a single streams2 duplex stream.",
      "cate": "Streams"
    },
    {
      "name": "pumpify",
      "url": "https://github.com/mafintosh/pumpify",
      "description": "Combine an array of streams into a single duplex stream.",
      "cate": "Streams"
    },
    {
      "name": "peek-stream",
      "url": "https://github.com/mafintosh/peek-stream",
      "description": "Transform stream that lets you peek the first line before deciding how to parse it.",
      "cate": "Streams"
    },
    {
      "name": "binary-split",
      "url": "https://github.com/maxogden/binary-split",
      "description": "A fast newline (or any delimiter) splitter stream.",
      "cate": "Streams"
    },
    {
      "name": "byline",
      "url": "https://github.com/jahewson/node-byline",
      "description": "Super-simple line-by-line Stream reader.",
      "cate": "Streams"
    },
    {
      "name": "first-chunk-stream",
      "url": "https://github.com/sindresorhus/first-chunk-stream",
      "description": "Transform the first chunk in a stream.",
      "cate": "Streams"
    },
    {
      "name": "pad-stream",
      "url": "https://github.com/sindresorhus/pad-stream",
      "description": "Pad each line in a stream.",
      "cate": "Streams"
    },
    {
      "name": "multistream",
      "url": "https://github.com/feross/multistream",
      "description": "Combine multiple streams into a single stream.",
      "cate": "Streams"
    },
    {
      "name": "stream-combiner2",
      "url": "https://github.com/substack/stream-combiner2",
      "description": "Turn a pipeline into a single stream.",
      "cate": "Streams"
    },
    {
      "name": "readable-stream",
      "url": "https://github.com/isaacs/readable-stream",
      "description": "Mirror of Streams2 and Streams3 implementations in core.",
      "cate": "Streams"
    },
    {
      "name": "through2-concurrent",
      "url": "https://github.com/almost/through2-concurrent",
      "description": "Transform object streams concurrently.",
      "cate": "Streams"
    },
    {
      "name": "graphicsmagick-stream",
      "url": "https://github.com/e-conomic/graphicsmagick-stream",
      "description": "Fast conversion/scaling of images using a pool of long lived GraphicsMagick processes.",
      "cate": "Streams"
    }
  ],
  "Real-time": [
    {
      "name": "Socket.io",
      "url": "http://socket.io",
      "description": "Enables real-time bidirectional event-based communication.",
      "cate": "Real-time"
    },
    {
      "name": "SockJS",
      "url": "https://github.com/sockjs/sockjs-node",
      "description": "Low latency, full duplex, cross-domain channel browser-server, with WebSockets or without.",
      "cate": "Real-time"
    },
    {
      "name": "Faye",
      "url": "http://faye.jcoglan.com",
      "description": "Real-time client-server message bus, based on Bayeux protocol.",
      "cate": "Real-time"
    },
    {
      "name": "SocketCluster",
      "url": "https://github.com/topcloud/socketcluster",
      "description": "Scalable HTTP + WebSocket engine which can run on multiple CPU cores.",
      "cate": "Real-time"
    },
    {
      "name": "Primus",
      "url": "https://github.com/primus/primus",
      "description": "An abstraction layer for real-time frameworks to prevent module lock-in.",
      "cate": "Real-time"
    },
    {
      "name": "Straw",
      "url": "https://github.com/simonswain/straw",
      "description": "Real-time dataflow framework.",
      "cate": "Real-time"
    }
  ],
  "Image": [
    {
      "name": "sharp",
      "url": "https://github.com/lovell/sharp",
      "description": "The fastest module for resizing JPEG, PNG, WebP and TIFF images.",
      "cate": "Image"
    },
    {
      "name": "image-type",
      "url": "https://github.com/sindresorhus/image-type",
      "description": "Detect the image type of a Buffer/Uint8Array.",
      "cate": "Image"
    },
    {
      "name": "gm",
      "url": "https://github.com/aheckmann/gm",
      "description": "GraphicsMagick and ImageMagick wrapper.",
      "cate": "Image"
    },
    {
      "name": "lwip",
      "url": "https://github.com/EyalAr/lwip",
      "description": "Lightweight image processor which does not require ImageMagick.",
      "cate": "Image"
    },
    {
      "name": "pica",
      "url": "https://github.com/nodeca/pica",
      "description": "High quality & fast resize (lanczos3) in pure JS. Alternative to canvas drawImage(), when no pixelation allowed.",
      "cate": "Image"
    },
    {
      "name": "jimp",
      "url": "https://github.com/oliver-moran/jimp",
      "description": "Image processing in pure JavaScript.",
      "cate": "Image"
    },
    {
      "name": "is-progressive",
      "url": "https://github.com/sindresorhus/is-progressive",
      "description": "Check if a JPEG image is progressive.",
      "cate": "Image"
    },
    {
      "name": "probe-image-size",
      "url": "https://github.com/nodeca/probe-image-size",
      "description": "Get the size of most image formats without a full download.",
      "cate": "Image"
    }
  ],
  "Text": [
    {
      "name": "Underscore.string",
      "url": "https://github.com/epeli/underscore.string",
      "description": "Collection of string manipulation utilities.",
      "cate": "Text"
    },
    {
      "name": "iconv-lite",
      "url": "https://github.com/ashtuchkin/iconv-lite",
      "description": "Convert character encodings.",
      "cate": "Text"
    },
    {
      "name": "repeating",
      "url": "https://github.com/sindresorhus/repeating",
      "description": "Repeat a string.",
      "cate": "Text"
    },
    {
      "name": "string-length",
      "url": "https://github.com/sindresorhus/string-length",
      "description": "Get the real length of a string - by correctly counting astral symbols and ignoring ansi escape codes.",
      "cate": "Text"
    },
    {
      "name": "camelcase",
      "url": "https://github.com/sindresorhus/camelcase",
      "description": "Convert a dash/dot/underscore/space separated string to camelCase: foo-bar → fooBar.",
      "cate": "Text"
    },
    {
      "name": "escape-string-regexp",
      "url": "https://github.com/sindresorhus/escape-string-regexp",
      "description": "Escape RegExp special characters.",
      "cate": "Text"
    },
    {
      "name": "execall",
      "url": "https://github.com/sindresorhus/execall",
      "description": "Find multiple RegExp matches in a string.",
      "cate": "Text"
    },
    {
      "name": "splice-string",
      "url": "https://github.com/sindresorhus/splice-string",
      "description": "Remove or replace part of a string like `Array#splice`.",
      "cate": "Text"
    },
    {
      "name": "indent-string",
      "url": "https://github.com/sindresorhus/indent-string",
      "description": "Indent each line in a string.",
      "cate": "Text"
    },
    {
      "name": "strip-indent",
      "url": "https://github.com/sindresorhus/strip-indent",
      "description": "Strip leading whitespace from every line in a string.",
      "cate": "Text"
    },
    {
      "name": "detect-indent",
      "url": "https://github.com/sindresorhus/detect-indent",
      "description": "Detect the indentation of code.",
      "cate": "Text"
    },
    {
      "name": "he",
      "url": "https://github.com/mathiasbynens/he",
      "description": "A robust HTML entity encoder/decoder.",
      "cate": "Text"
    },
    {
      "name": "i18n-node",
      "url": "https://github.com/mashpie/i18n-node",
      "description": "Simple translation module with dynamic JSON storage.",
      "cate": "Text"
    },
    {
      "name": "babelfish",
      "url": "https://github.com/nodeca/babelfish/",
      "description": "i18n with very easy syntax for plurals.",
      "cate": "Text"
    },
    {
      "name": "parse-columns",
      "url": "https://github.com/sindresorhus/parse-columns",
      "description": "Parse text columns, like the output of Unix commands.",
      "cate": "Text"
    },
    {
      "name": "random-int",
      "url": "https://github.com/sindresorhus/random-int",
      "description": "Generate a random integer.",
      "cate": "Text"
    },
    {
      "name": "random-float",
      "url": "https://github.com/sindresorhus/random-float",
      "description": "Generate a random float.",
      "cate": "Text"
    },
    {
      "name": "unique-random",
      "url": "https://github.com/sindresorhus/unique-random",
      "description": "Generate random numbers that are consecutively unique.",
      "cate": "Text"
    },
    {
      "name": "round-to",
      "url": "https://github.com/sindresorhus/round-to",
      "description": "Round a number to a specific number of decimal places: `1.234` → `1.2`.",
      "cate": "Text"
    }
  ],
  "Math": [
    {
      "name": "ndarray",
      "url": "https://github.com/mikolalysenko/ndarray",
      "description": "Multidimensional arrays.",
      "cate": "Math"
    },
    {
      "name": "mathjs",
      "url": "https://github.com/josdejong/mathjs",
      "description": "An extensive math library.",
      "cate": "Math"
    },
    {
      "name": "math-sum",
      "url": "https://github.com/sindresorhus/math-sum",
      "description": "Sum numbers.",
      "cate": "Math"
    },
    {
      "name": "math-clamp",
      "url": "https://github.com/sindresorhus/math-clamp",
      "description": "Clamp a number.",
      "cate": "Math"
    }
  ],
  "Date": [
    {
      "name": "Moment.js",
      "url": "http://momentjs.com",
      "description": "Parse, validate, manipulate, and display dates.",
      "cate": "Date"
    },
    {
      "name": "Moment Timezone",
      "url": "http://momentjs.com/timezone/",
      "description": "IANA Time Zone Database + Moment.js.",
      "cate": "Date"
    },
    {
      "name": "dateformat",
      "url": "https://github.com/felixge/node-dateformat",
      "description": "Date formatting.",
      "cate": "Date"
    }
  ],
  "URL": [
    {
      "name": "normalize-url",
      "url": "https://github.com/sindresorhus/normalize-url",
      "description": "Normalize a URL.",
      "cate": "URL"
    },
    {
      "name": "humanize-url",
      "url": "https://github.com/sindresorhus/humanize-url",
      "description": "Humanize a URL: http://sindresorhus.com → sindresorhus.com.",
      "cate": "URL"
    },
    {
      "name": "url-unshort",
      "url": "https://github.com/nodeca/url-unshort",
      "description": "Expand shortened URLs.",
      "cate": "URL"
    },
    {
      "name": "speakingurl",
      "url": "https://github.com/pid/speakingurl",
      "description": "Generate a slug from a string with transliteration.",
      "cate": "URL"
    },
    {
      "name": "linkify-it",
      "url": "https://github.com/markdown-it/linkify-it",
      "description": "Link patterns detector with full unicode support.",
      "cate": "URL"
    },
    {
      "name": "url-pattern",
      "url": "https://github.com/snd/url-pattern",
      "description": "Easier than regex string matching patterns for URLs and other strings.",
      "cate": "URL"
    },
    {
      "name": "embedza",
      "url": "https://github.com/nodeca/embedza",
      "description": "Create HTML snippets/embeds from URLs using info from oEmbed, Open Graph, meta tags.",
      "cate": "URL"
    }
  ],
  "Data validation": [
    {
      "name": "joi",
      "url": "https://github.com/spumko/joi",
      "description": "Object schema description language and validator for JavaScript objects.",
      "cate": "Data validation"
    },
    {
      "name": "is-my-json-valid",
      "url": "https://github.com/mafintosh/is-my-json-valid",
      "description": "JSON Schema validator that uses code generation to be extremely fast.",
      "cate": "Data validation"
    }
  ],
  "Parsing": [
    {
      "name": "mdast",
      "url": "https://github.com/wooorm/mdast",
      "description": "Markdown processor powered by plugins.",
      "cate": "Parsing"
    },
    {
      "name": "markdown-it",
      "url": "https://github.com/markdown-it/markdown-it",
      "description": "A very fast markdown parser with 100% CommonMark support, extensions and syntax plugins.",
      "cate": "Parsing"
    },
    {
      "name": "parse5",
      "url": "https://github.com/inikulin/parse5",
      "description": "Fast full-featured spec compliant HTML parser.",
      "cate": "Parsing"
    },
    {
      "name": "strip-json-comments",
      "url": "https://github.com/sindresorhus/strip-json-comments",
      "description": "Strip comments from JSON.",
      "cate": "Parsing"
    },
    {
      "name": "strip-css-comments",
      "url": "https://github.com/sindresorhus/strip-css-comments",
      "description": "Strip comments from CSS.",
      "cate": "Parsing"
    },
    {
      "name": "parse-json",
      "url": "https://github.com/sindresorhus/parse-json",
      "description": "Parse JSON with more helpful errors.",
      "cate": "Parsing"
    },
    {
      "name": "URI.js",
      "url": "https://github.com/medialize/URI.js",
      "description": "URL mutation.",
      "cate": "Parsing"
    },
    {
      "name": "PostCSS",
      "url": "https://github.com/postcss/postcss",
      "description": "CSS parser / stringifier.",
      "cate": "Parsing"
    },
    {
      "name": "JSONStream",
      "url": "https://github.com/dominictarr/JSONStream",
      "description": "Streaming JSON.parse and stringify.",
      "cate": "Parsing"
    },
    {
      "name": "csv-parser",
      "url": "https://github.com/mafintosh/csv-parser",
      "description": "Streaming CSV parser that aims to be faster than everyone else.",
      "cate": "Parsing"
    },
    {
      "name": "neat-csv",
      "url": "https://github.com/sindresorhus/neat-csv",
      "description": "Fast CSV parser. Callback interface for the above.",
      "cate": "Parsing"
    },
    {
      "name": "PEG.js",
      "url": "https://github.com/dmajda/pegjs",
      "description": "Simple parser generator that produces fast parsers with excellent error reporting.",
      "cate": "Parsing"
    },
    {
      "name": "x-ray",
      "url": "https://github.com/lapwinglabs/x-ray",
      "description": "A web scraping utility to see through the `<html>` noise.",
      "cate": "Parsing"
    },
    {
      "name": "nearley",
      "url": "https://github.com/Hardmath123/nearley",
      "description": "Simple, fast, powerful parsing for JavaScript.",
      "cate": "Parsing"
    },
    {
      "name": "binary-extract",
      "url": "https://github.com/juliangruber/binary-extract",
      "description": "Extract a value from a buffer of JSON without parsing the whole thing.",
      "cate": "Parsing"
    },
    {
      "name": "json-mask",
      "url": "https://github.com/nemtsov/json-mask",
      "description": "Tiny language and engine for selecting parts of an object, hiding/masking the rest.",
      "cate": "Parsing"
    },
    {
      "name": "Stylecow",
      "url": "https://github.com/stylecow/stylecow",
      "description": "Parse, manipulate and convert modern CSS to make it compatible with all browsers. Extensible with plugins.",
      "cate": "Parsing"
    },
    {
      "name": "js-yaml",
      "url": "https://github.com/nodeca/js-yaml",
      "description": "Very fast YAML parser.",
      "cate": "Parsing"
    },
    {
      "name": "excel-stream",
      "url": "https://github.com/dominictarr/excel-stream",
      "description": "Streaming Excel spreadsheet to JSON parser.",
      "cate": "Parsing"
    },
    {
      "name": "xml2js",
      "url": "https://github.com/Leonidas-from-XIV/node-xml2js",
      "description": "XML to JavaScript object converter.",
      "cate": "Parsing"
    }
  ],
  "Humanize": [
    {
      "name": "pretty-bytes",
      "url": "https://github.com/sindresorhus/pretty-bytes",
      "description": "Convert bytes to a human readable string: `1337` → `1.34 kB`.",
      "cate": "Humanize"
    },
    {
      "name": "pretty-ms",
      "url": "https://github.com/sindresorhus/pretty-ms",
      "description": "Convert milliseconds to a human readable string: `1337000000` → `15d 11h 23m 20s`.",
      "cate": "Humanize"
    },
    {
      "name": "ms",
      "url": "https://github.com/guille/ms.js",
      "description": "Tiny millisecond conversion utility.",
      "cate": "Humanize"
    },
    {
      "name": "pretty-error",
      "url": "https://github.com/AriaMinaei/pretty-error",
      "description": "Errors with less clutter.",
      "cate": "Humanize"
    },
    {
      "name": "humanize",
      "url": "https://github.com/taijinlee/humanize",
      "description": "Data formatter for human readability.",
      "cate": "Humanize"
    },
    {
      "name": "read-art",
      "url": "https://github.com/Tjatse/node-readability",
      "description": "Extract readable content from any page.",
      "cate": "Humanize"
    }
  ],
  "Compression": [
    {
      "name": "Archiver",
      "url": "https://github.com/ctalkington/node-archiver",
      "description": "Streaming interface for archive generation, supporting ZIP and TAR.",
      "cate": "Compression"
    },
    {
      "name": "decompress-zip",
      "url": "https://github.com/bower/decompress-zip",
      "description": "Unzip.",
      "cate": "Compression"
    },
    {
      "name": "pako",
      "url": "https://github.com/nodeca/pako",
      "description": "High speed zlib port to pure js (deflate, inflate, gzip).",
      "cate": "Compression"
    },
    {
      "name": "tar-stream",
      "url": "https://github.com/mafintosh/tar-stream",
      "description": "Streaming tar parser and generator. Also see [tar-fs](https://github.com/mafintosh/tar-fs).",
      "cate": "Compression"
    },
    {
      "name": "decompress",
      "url": "https://github.com/kevva/decompress",
      "description": "A pluggable decompression module with support for `tar`, `tar.gz` and `zip` files out of the box.",
      "cate": "Compression"
    }
  ],
  "Network": [
    {
      "name": "get-port",
      "url": "https://github.com/sindresorhus/get-port",
      "description": "Get an available port.",
      "cate": "Network"
    },
    {
      "name": "ipify",
      "url": "https://github.com/sindresorhus/ipify",
      "description": "Get your public IP address.",
      "cate": "Network"
    },
    {
      "name": "getmac",
      "url": "https://github.com/bevry/getmac",
      "description": "Get the computer MAC address.",
      "cate": "Network"
    }
  ],
  "Database": [
    {
      "name": "LevelUP",
      "url": "https://github.com/rvagg/node-levelup",
      "description": "LevelDB.",
      "cate": "Database"
    },
    {
      "name": "MongoDB",
      "url": "https://github.com/mongodb/node-mongodb-native",
      "description": "MongoDB driver.",
      "cate": "Database"
    },
    {
      "name": "PostgreSQL",
      "url": "https://github.com/brianc/node-postgres",
      "description": "PostgreSQL client. Pure JavaScript and native libpq bindings.",
      "cate": "Database"
    },
    {
      "name": "MySQL",
      "url": "https://github.com/felixge/node-mysql",
      "description": "MySQL client.",
      "cate": "Database"
    },
    {
      "name": "Redis",
      "url": "https://github.com/luin/ioredis",
      "description": "Redis client.",
      "cate": "Database"
    },
    {
      "name": "Bookshelf",
      "url": "http://bookshelfjs.org",
      "description": "ORM for PostgreSQL, MySQL and SQLite3 in the style of Backbone.js.",
      "cate": "Database"
    },
    {
      "name": "Mongoose",
      "url": "http://mongoosejs.com",
      "description": "Elegant MongoDB object modeling.",
      "cate": "Database"
    },
    {
      "name": "Sequelize",
      "url": "https://github.com/sequelize/sequelize",
      "description": "Multi-dialect ORM. Supports PostgreSQL, SQLite, MySQL.",
      "cate": "Database"
    },
    {
      "name": "Waterline",
      "url": "https://github.com/balderdashy/waterline",
      "description": "Datastore-agnostic tool that dramatically simplifies interaction with one or more databases.",
      "cate": "Database"
    },
    {
      "name": "Iridium",
      "url": "https://github.com/SierraSoftworks/Iridium",
      "description": "A high performance MongoDB ORM with support for promises, distributed caching, preprocessing, validation and plugins.",
      "cate": "Database"
    },
    {
      "name": "OpenRecord",
      "url": "https://github.com/PhilWaldmann/openrecord",
      "description": "ORM for PostgreSQL, MySQL, SQLite3 and RESTful datastores. Similar to ActiveRecord.",
      "cate": "Database"
    },
    {
      "name": "orm2",
      "url": "https://github.com/dresende/node-orm2",
      "description": "ORM for PostgreSQL, MariaDB, MySQL, Amazon Redshift, SQLite, MongoDB.",
      "cate": "Database"
    },
    {
      "name": "firenze",
      "url": "https://github.com/fahad19/firenze",
      "description": "Adapter-based ORM for MySQL, Memory, Redis, localStorage and more.",
      "cate": "Database"
    },
    {
      "name": "Knex",
      "url": "http://knexjs.org",
      "description": "A query builder for PostgreSQL, MySQL and SQLite3, designed to be flexible, portable, and fun to use.",
      "cate": "Database"
    },
    {
      "name": "NeDB",
      "url": "https://github.com/louischatriot/nedb",
      "description": "Embedded persistent database written in JavaScript.",
      "cate": "Database"
    }
  ],
  "Testing": [
    {
      "name": "AVA",
      "url": "https://ava.li",
      "description": "Futuristic test runner.",
      "cate": "Testing"
    },
    {
      "name": "tap",
      "url": "https://github.com/isaacs/node-tap",
      "description": "A TAP test framework.",
      "cate": "Testing"
    },
    {
      "name": "tape",
      "url": "https://github.com/substack/tape",
      "description": "TAP-producing test harness.",
      "cate": "Testing"
    },
    {
      "name": "Mocha",
      "url": "http://mochajs.org",
      "description": "A feature-rich test framework making asynchronous testing simple and fun.",
      "cate": "Testing"
    },
    {
      "name": "Mochify",
      "url": "https://github.com/mantoni/mochify.js",
      "description": "TDD with Browserify, Mocha, PhantomJS and WebDriver.",
      "cate": "Testing"
    },
    {
      "name": "trevor",
      "url": "https://github.com/vdemedes/trevor",
      "description": "Run tests against multiple versions of Node.js without switching versions manually or pushing to Travis CI.",
      "cate": "Testing"
    },
    {
      "name": "loadtest",
      "url": "https://github.com/alexfernandez/loadtest",
      "description": "Run load tests for your web application, with an API for automation.",
      "cate": "Testing"
    },
    {
      "name": "istanbul",
      "url": "https://github.com/gotwarlost/istanbul",
      "description": "A code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests.",
      "cate": "Testing"
    },
    {
      "name": "nyc",
      "url": "https://github.com/bcoe/nyc",
      "description": "Code coverage tool built on istanbul that works with subprocesses.",
      "cate": "Testing"
    },
    {
      "name": "Sinon.JS",
      "url": "https://github.com/cjohansen/Sinon.JS",
      "description": "Test spies, stubs and mocks.",
      "cate": "Testing"
    },
    {
      "name": "navit",
      "url": "https://github.com/nodeca/navit",
      "description": "PhantomJS / SlimerJS wrapper to simplify browser test scripting.",
      "cate": "Testing"
    },
    {
      "name": "nock",
      "url": "https://github.com/pgte/nock",
      "description": "HTTP mocking and expectations.",
      "cate": "Testing"
    },
    {
      "name": "intern",
      "url": "https://github.com/theintern/intern",
      "description": "A next-generation code testing stack for JavaScript.",
      "cate": "Testing"
    },
    {
      "name": "toxy",
      "url": "https://github.com/h2non/toxy",
      "description": "Hackable HTTP proxy to simulate failure scenarios and network conditions.",
      "cate": "Testing"
    }
  ],
  "Benchmarking": [
    {
      "name": "Benchmark.js",
      "url": "http://benchmarkjs.com",
      "description": "A robust benchmarking library that works on nearly all JavaScript platforms, supports high-resolution timers, and returns statistically significant results.",
      "cate": "Benchmarking"
    },
    {
      "name": "matcha",
      "url": "https://github.com/logicalparadox/matcha",
      "description": "A caffeine-driven, simplistic approach to benchmarking.",
      "cate": "Benchmarking"
    }
  ],
  "Minifiers": [
    {
      "name": "UglifyJS2",
      "url": "http://lisperator.net/uglifyjs/",
      "description": "JavaScript minifier.",
      "cate": "Minifiers"
    },
    {
      "name": "clean-css",
      "url": "https://github.com/GoalSmashers/clean-css",
      "description": "CSS minifier.",
      "cate": "Minifiers"
    },
    {
      "name": "minimize",
      "url": "https://github.com/Moveo/minimize",
      "description": "HTML minifier.",
      "cate": "Minifiers"
    },
    {
      "name": "imagemin",
      "url": "https://github.com/kevva/imagemin",
      "description": "Image minifier.",
      "cate": "Minifiers"
    }
  ],
  "Authentication": [
    {
      "name": "Passport",
      "url": "http://passportjs.org",
      "description": "Simple, unobtrusive authentication.",
      "cate": "Authentication"
    },
    {
      "name": "everyauth",
      "url": "https://github.com/bnoguchi/everyauth",
      "description": "Authentication and authorization (password, Facebook, etc) for your Connect and Express apps.",
      "cate": "Authentication"
    },
    {
      "name": "passwordless",
      "url": "https://passwordless.net",
      "description": "Token-based authentication middleware for Express allowing authentication without passwords.",
      "cate": "Authentication"
    },
    {
      "name": "Lockit",
      "url": "https://github.com/zemirco/lockit",
      "description": "Full featured authentication solution for Express. Supports a variety of databases, predefined routes, email and two-factor authentication.",
      "cate": "Authentication"
    },
    {
      "name": "Grant",
      "url": "https://github.com/simov/grant",
      "description": "OAuth middleware for Express, Koa, and Hapi.",
      "cate": "Authentication"
    }
  ],
  "Email": [
    {
      "name": "Nodemailer",
      "url": "https://github.com/andris9/Nodemailer",
      "description": "The fastest way to handle email.",
      "cate": "Email"
    },
    {
      "name": "emailjs",
      "url": "https://github.com/eleith/emailjs",
      "description": "Send text/HTML emails with attachments to any SMTP server.",
      "cate": "Email"
    }
  ],
  "Node.js management": [
    {
      "name": "n",
      "url": "https://github.com/visionmedia/n",
      "description": "Node.js version management.",
      "cate": "Node.js management"
    },
    {
      "name": "nave",
      "url": "https://github.com/isaacs/nave",
      "description": "Virtual Environments for Node.js.",
      "cate": "Node.js management"
    },
    {
      "name": "nodeenv",
      "url": "https://github.com/ekalinin/nodeenv",
      "description": "A Node.js virtual environment compatible to Python's virtualenv.",
      "cate": "Node.js management"
    },
    {
      "name": "nvm for Windows",
      "url": "https://github.com/coreybutler/nvm-windows",
      "description": "Version management for Windows.",
      "cate": "Node.js management"
    }
  ],
  "Polyfills": [
    {
      "name": "set-immediate-shim",
      "url": "https://github.com/sindresorhus/set-immediate-shim",
      "description": "Simple `setImmediate()` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "path-is-absolute",
      "url": "https://github.com/sindresorhus/path-is-absolute",
      "description": "Node.js 0.12 `path.isAbsolute()` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "os-tmpdir",
      "url": "https://github.com/sindresorhus/os-tmpdir",
      "description": "Node.js `os.tmpdir()` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "os-homedir",
      "url": "https://github.com/sindresorhus/os-homedir",
      "description": "Node.js 4.0 `os.homedir()` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "debug-log",
      "url": "https://github.com/sindresorhus/debug-log",
      "description": "Node.js 0.12 `util.debuglog()` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "buffer-equals",
      "url": "https://github.com/sindresorhus/buffer-equals",
      "description": "Node.js 0.12 `buffer.equals()` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "buf-indexof",
      "url": "https://github.com/sindresorhus/buf-indexof",
      "description": "Node.js 4.0 `buffer.indexOf()` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "buf-compare",
      "url": "https://github.com/sindresorhus/buf-compare",
      "description": "Node.js 0.12 `Buffer.compare()` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "fs-access",
      "url": "https://github.com/sindresorhus/fs-access",
      "description": "Node.js 0.12 `fs.access()` & `fs.accessSync()` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "exec-file-sync",
      "url": "https://github.com/sindresorhus/exec-file-sync",
      "description": "Node.js 0.12 `childProcess.execFileSync()` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "child-process-ctor",
      "url": "https://github.com/sindresorhus/child-process-ctor",
      "description": "Node.js 4.0 `childProcess.ChildProcess` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "node-status-codes",
      "url": "https://github.com/sindresorhus/node-status-codes",
      "description": "Node.js `http.STATUS_CODES` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "exit-code",
      "url": "https://github.com/isaacs/exit-code",
      "description": "Node.js 0.12 `process.exitCode` polyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "core-assert",
      "url": "https://github.com/sindresorhus/core-assert",
      "description": "Node.js `assert` as a standalone module.",
      "cate": "Polyfills"
    },
    {
      "name": "deep-strict-equal",
      "url": "https://github.com/sindresorhus/deep-strict-equal",
      "description": "Test for deep equality - Node.js `assert.deepStrictEqual()` algorithm as a standalone module.",
      "cate": "Polyfills"
    },
    {
      "name": "object-assign",
      "url": "https://github.com/sindresorhus/object-assign",
      "description": "ES2015 `Object.assign()` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "pinkie-promise",
      "url": "https://github.com/floatdrop/pinkie-promise",
      "description": "ES2015 `Promise` ponyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "harmony-reflect",
      "url": "https://github.com/tvcutsem/harmony-reflect",
      "description": "ES2015 `Reflect` and `Proxy` polyfill.",
      "cate": "Polyfills"
    },
    {
      "name": "es6-shim",
      "url": "https://github.com/paulmillr/es6-shim",
      "description": "Collection of ES2015 polyfills.",
      "cate": "Polyfills"
    }
  ],
  "Natural language processing": [
    {
      "name": "retext",
      "url": "https://github.com/wooorm/retext",
      "description": "An extensible natural language system.",
      "cate": "Natural language processing"
    },
    {
      "name": "franc",
      "url": "https://github.com/wooorm/franc",
      "description": "Detect the language of text.",
      "cate": "Natural language processing"
    },
    {
      "name": "leven",
      "url": "https://github.com/sindresorhus/leven",
      "description": "Measure the difference between two strings using the Levenshtein distance algorithm.",
      "cate": "Natural language processing"
    },
    {
      "name": "natural",
      "url": "https://github.com/NaturalNode/natural",
      "description": "A general natural language facility.",
      "cate": "Natural language processing"
    }
  ],
  "Process management": [
    {
      "name": "PM2",
      "url": "https://github.com/Unitech/pm2",
      "description": "Advanced Process Manager.",
      "cate": "Process management"
    },
    {
      "name": "node-windows",
      "url": "https://github.com/coreybutler/node-windows",
      "description": "Run scripts as a native Windows service and log to the Event viewer.",
      "cate": "Process management"
    },
    {
      "name": "node-mac",
      "url": "https://github.com/coreybutler/node-mac",
      "description": "Run scripts as a native Mac daemon and log to the console app.",
      "cate": "Process management"
    },
    {
      "name": "node-linux",
      "url": "https://github.com/coreybutler/node-linux",
      "description": "Run scripts as native system service and log to syslog.",
      "cate": "Process management"
    },
    {
      "name": "forever",
      "url": "https://github.com/nodejitsu/forever",
      "description": "A simple CLI tool for ensuring that a given script runs continuously (i.e. forever).",
      "cate": "Process management"
    },
    {
      "name": "supervisor",
      "url": "https://github.com/isaacs/node-supervisor",
      "description": "Restart scripts when they crash or restart when a `*.js` file changes.",
      "cate": "Process management"
    },
    {
      "name": "Phusion Passenger",
      "url": "https://www.phusionpassenger.com/node_weekly",
      "description": "Friendly process manager that integrates directly into Nginx.",
      "cate": "Process management"
    },
    {
      "name": "naught",
      "url": "https://github.com/andrewrk/naught",
      "description": "Process manager with zero downtime deployment.",
      "cate": "Process management"
    }
  ],
  "Automation": [
    {
      "name": "robotjs",
      "url": "https://github.com/octalmage/robotjs",
      "description": " Desktop Automation: control the mouse, keyboard and read the screen.",
      "cate": "Automation"
    }
  ],
  "AST": [
    {
      "name": "Acorn",
      "url": "https://github.com/marijnh/acorn",
      "description": "A tiny, fast JavaScript parser.",
      "cate": "AST"
    },
    {
      "name": "Rocambole",
      "url": "https://github.com/millermedeiros/rocambole",
      "description": "Recursively walk and transform JavaScript AST.",
      "cate": "AST"
    }
  ],
  "Static site generators": [
    {
      "name": "Metalsmith",
      "url": "http://www.metalsmith.io",
      "description": "An extremely simple, pluggable static site generator.",
      "cate": "Static site generators"
    },
    {
      "name": "Wintersmith",
      "url": "http://wintersmith.io",
      "description": "Flexible, minimalistic, multi-platform static site generator.",
      "cate": "Static site generators"
    },
    {
      "name": "Assemble",
      "url": "http://assemble.io",
      "description": "Static site generator for Node.js, Grunt.js, and Yeoman.",
      "cate": "Static site generators"
    },
    {
      "name": "DocPad",
      "url": "https://github.com/docpad/docpad",
      "description": "Static site generator with dynamic abilities and huge plugin ecosystem.",
      "cate": "Static site generators"
    }
  ],
  "Content management systems": [
    {
      "name": "KeystoneJS",
      "url": "http://keystonejs.com",
      "description": "CMS and web application platform built on Express and MongoDB.",
      "cate": "Content management systems"
    },
    {
      "name": "Calipso",
      "url": "http://calip.so",
      "description": "A simple content management system, built along similar themes to Drupal and Wordpress, that is designed to be fast, flexible and simple.",
      "cate": "Content management systems"
    },
    {
      "name": "Apostrophe2",
      "url": "http://apostrophenow.org",
      "description": "A content management system with an emphasis on intuitive front end content editing and administration built on Express and MongoDB.",
      "cate": "Content management systems"
    }
  ],
  "Forum": [
    {
      "name": "nodeBB",
      "url": "https://nodebb.org",
      "description": "A better forum platform for the modern web.",
      "cate": "Forum"
    }
  ],
  "Blogging": [
    {
      "name": "ghost",
      "url": "https://ghost.org",
      "description": "Simple, powerful publishing platform that allows you to share your story with the world.",
      "cate": "Blogging"
    },
    {
      "name": "Hexo",
      "url": "http://hexo.io",
      "description": "Fast, simple and powerful blogging framework.",
      "cate": "Blogging"
    }
  ],
  "Weird": [
    {
      "name": "superb",
      "url": "https://github.com/sindresorhus/superb",
      "description": "Get superb like words.",
      "cate": "Weird"
    },
    {
      "name": "cat-names",
      "url": "https://github.com/sindresorhus/cat-names",
      "description": "Get popular cat names.",
      "cate": "Weird"
    },
    {
      "name": "dog-names",
      "url": "https://github.com/sindresorhus/dog-names",
      "description": "Get popular dog names.",
      "cate": "Weird"
    },
    {
      "name": "superheroes",
      "url": "https://github.com/sindresorhus/superheroes",
      "description": "Get superhero names.",
      "cate": "Weird"
    },
    {
      "name": "supervillains",
      "url": "https://github.com/sindresorhus/supervillains",
      "description": "Get supervillain names.",
      "cate": "Weird"
    },
    {
      "name": "cool-ascii-faces",
      "url": "https://github.com/maxogden/cool-ascii-faces",
      "description": "Get some cool ascii faces.",
      "cate": "Weird"
    },
    {
      "name": "cat-ascii-faces",
      "url": "https://github.com/melaniecebula/cat-ascii-faces",
      "description": "₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”",
      "cate": "Weird"
    }
  ],
  "Miscellaneous": [
    {
      "name": "nodebots",
      "url": "http://nodebots.io",
      "description": "Robots powered by JavaScript.",
      "cate": "Miscellaneous"
    },
    {
      "name": "node-module-boilerplate",
      "url": "https://github.com/sindresorhus/node-module-boilerplate",
      "description": "Boilerplate to kickstart creating a node module.",
      "cate": "Miscellaneous"
    },
    {
      "name": "generator-nm",
      "url": "https://github.com/sindresorhus/generator-nm",
      "description": "Scaffold out a node module.",
      "cate": "Miscellaneous"
    }
  ],
  "Tutorials": [
    {
      "name": "Nodeschool",
      "url": "http://nodeschool.io",
      "description": "Learn Node.js with interactive lessons.",
      "cate": "Tutorials"
    },
    {
      "name": "The Art of Node",
      "url": "https://github.com/maxogden/art-of-node/#the-art-of-node",
      "description": "An introduction to Node.js.",
      "cate": "Tutorials"
    },
    {
      "name": "stream-handbook",
      "url": "https://github.com/substack/stream-handbook",
      "description": "How to write Node.js programs with streams.",
      "cate": "Tutorials"
    },
    {
      "name": "browserify-handbook",
      "url": "https://github.com/substack/browserify-handbook",
      "description": "The definitive guide for browserify.",
      "cate": "Tutorials"
    },
    {
      "name": "module-best-practices",
      "url": "https://github.com/mattdesl/module-best-practices",
      "description": "Some good practices when writing new npm modules.",
      "cate": "Tutorials"
    }
  ],
  "Discovery": [
    {
      "name": "node-modules.com",
      "url": "http://node-modules.com",
      "description": "An alternative npm search engine with a more intelligent and personal results ranking.",
      "cate": "Discovery"
    }
  ],
  "Newsletters": [
    {
      "name": "node weekly",
      "url": "http://nodeweekly.com",
      "description": "Weekly e-mail round-up of Node.js news and articles.",
      "cate": "Newsletters"
    },
    {
      "name": "nmotw",
      "url": "http://nmotw.in",
      "description": "Node Module Of The Week, weekly dose of hand picked node modules.",
      "cate": "Newsletters"
    }
  ],
  "Videos": [
    {
      "name": "LearnAllTheNodes",
      "url": "http://www.learnallthenodes.com",
      "description": "Series of useful tips, tricks, and packages.",
      "cate": "Videos"
    },
    {
      "name": "Full Streams Ahead",
      "url": "http://dry.ly/full-streams-ahead",
      "description": "Introduction to streams.",
      "cate": "Videos"
    },
    {
      "name": "StrongLoop Talks",
      "url": "https://strongloop.com/node-js/videos/",
      "description": "Series of talks.",
      "cate": "Videos"
    }
  ],
  "Blogs": [
    {
      "name": "HowToNode",
      "url": "http://howtonode.org",
      "description": "Teaching how to do various tasks in Node.js as well as teach fundamental concepts that are needed to write effective code.",
      "cate": "Blogs"
    }
  ],
  "Cheatsheets": [
    {
      "name": "Stream FAQs",
      "url": "https://github.com/stephenplusplus/stream-faqs",
      "description": "Answering common questions about streams, covering pagination, events, and more.",
      "cate": "Cheatsheets"
    }
  ],
  "Tools": [
    {
      "name": "GitHub Linker",
      "url": "https://chrome.google.com/webstore/detail/github-linker/jlmafbaeoofdegohdhinkhilhclaklkp",
      "description": "Chrome extension that linkifies dependencies in package.json, .js, .jsx, .coffee and .md files on GitHub.",
      "cate": "Tools"
    },
    {
      "name": "npm-hub",
      "url": "https://chrome.google.com/webstore/detail/npm-hub/kbbbjimdjbjclaebffknlabpogocablj",
      "description": "Chrome extension to display npm dependencies at the bottom of a repo's readme.",
      "cate": "Tools"
    },
    {
      "name": "RequireBin",
      "url": "http://requirebin.com",
      "description": "Shareable JavaScript programs powered by npm and browserify.",
      "cate": "Tools"
    },
    {
      "name": "Tonic",
      "url": "http://blog.tonicdev.com/2015/09/30/embedded-tonic.html",
      "description": "Embed a Node.js environment on any website.",
      "cate": "Tools"
    }
  ]
}
;
}, {}]}, {}, {"1":""})