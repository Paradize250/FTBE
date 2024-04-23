<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SavoirController extends AbstractController
{
    #[Route('/savoir', name: 'app_savoir')]
    public function index(): Response
    {
        return $this->render('savoir/index.html.twig', [
            'controller_name' => 'SavoirController',
        ]);
    }
}
