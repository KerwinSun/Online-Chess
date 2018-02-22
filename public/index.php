<?php
require_once __DIR__ . '/../vendor/autoload.php';
use Silex\Application;
use Silex\Provider\TwigServiceProvider;

$app = new Application;
$app['debug'] = true;

$app->register(new TwigServiceProvider, [

    'twig.path' => __DIR__.'/../views'

]);

$app->get('/', function() use ($app){

    return $app['twig']->render('home.twig');

});

$app->mount('/base', include 'base.php');

$app->run();