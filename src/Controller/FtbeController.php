<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FtbeController extends AbstractController
{
    #[Route('/ftbe', name: 'app_ftbe')]
    public function index(): Response
    {
        return $this->render('ftbe/index.html.twig', [
            'controller_name' => 'FtbeController',
        ]);
    }
}
