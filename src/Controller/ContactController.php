<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Mailer\MailerInterface;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(): Response
    {
        return $this->render('contact/index.html.twig', [
            'controller_name' => 'ContactController',
        ]);
    }

    #[Route('/api/contact', name: 'api_contact', methods: ['POST'])]
    public function createContact(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator, MailerInterface $mailer): Response
    {
        $data = $request->getContent();
        $contact = $serializer->deserialize($data, Contact::class, 'json');

        $errors = $validator->validate($contact);
        if (count($errors) > 0) {
            // Here we're using JsonResponse, which automatically sets the content type to 'application/json'
            return $this->json(['errors' => $errors], Response::HTTP_BAD_REQUEST);
        }

        $entityManager->persist($contact);
        $entityManager->flush();

        // Example of manually setting the JSON response
        $responseData = ['message' => 'Contact created'];
        return new Response(json_encode($responseData), Response::HTTP_CREATED, ['Content-Type' => 'application/json']);
    }
}
