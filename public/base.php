<?php
use Silex\Application;
use Silex\Provider\TwigServiceProvider;


$base = $app['controllers_factory'];
$base->get('/', function (Application $app) {

    return $app['twig']->render('base.twig');

});

return $base;