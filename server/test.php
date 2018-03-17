<?php

use MongoDB\Client;

//$mongoDbClient = new Client('mongodb://localhost:27017');
//$collection = (new MongoDB\Client);

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

$filter = [];
$options = [];
$query = new MongoDB\Driver\Query($filter, $options);

$cursor = $manager->executeQuery('test.user', $query);
echo json_encode(iterator_to_array($cursor));

/*foreach ($cursor as $document) {
    echo json_encode($document);
}*/
