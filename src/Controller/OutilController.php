<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Services;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class OutilController extends AbstractController
{
    #[Route('/outil', name: 'app_outil')]
    public function index(): Response
    {
        return $this->render('outil/index.html.twig', [
            'controller_name' => 'OutilController',
        ]);
    }

    #[Route('/api/outil', name: 'api_outil', methods: ['GET'])]
    public function listServices(EntityManagerInterface $entityManager): JsonResponse
    {
        $services = $entityManager->getRepository(Services::class)->findAll();
        $data = [];

        foreach ($services as $service) {
            $data[] = [
                'id' => $service->getId(),
                'description' => $service->getDescription(),
                'price' => $service->getPrice(),
                // include any other properties you need
            ];
        }
        return $this->json($data);

    }
    #[Route('/api/outil', name: 'api_calculate_estimate', methods: ['POST'])]
    public function calculateEstimate(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $selectedIds = json_decode($request->getContent(), true)['selectedServices'] ?? [];
        $totalEstimate = 0;

        foreach ($selectedIds as $id) {
            $element = $entityManager->getRepository(Services::class)->find($id);

            if ($element) {
                $totalEstimate += $element->getPrice();
            }
        }

        return $this->json(['totalEstimate' => $totalEstimate]);
    }
}
