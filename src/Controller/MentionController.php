<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MentionController extends AbstractController
{
    #[Route('/legal-mention', name: 'mention')]
    public function mention(): Response
    {
        return $this->render('mention/legal-mention.html.twig');
    }

    #[Route('/confidentiality', name: 'confidentiality')]
    public function confidentiality(): Response
    {
        return $this->render('mention/confidentiality.html.twig', [
            'controller_name' => 'ConfidentialityController',
        ]);
    }
}