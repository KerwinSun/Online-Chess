<?php
use Silex\Application;
use Silex\Provider\TwigServiceProvider;


$rooms = $app['controllers_factory'];
$rooms->get('/', function (Application $app) {

    return $app['twig']->render('rooms.twig');

});

return $rooms;