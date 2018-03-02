<?php
use Silex\Application;
use Silex\Provider\TwigServiceProvider;


$base = $app['controllers_factory'];
$base->get('/', function (Application $app) {
    
    
    return $app['twig']->render('base.twig');

});
$base->get('/{roomName}', function (Application $app, $roomName) {
    
    
    return $app['twig']->render('base.twig', array(
        
        'roomName' => $roomName,
        
        )
    );
    

});

return $base;