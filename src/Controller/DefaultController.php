<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;




class DefaultController extends AbstractController
{

    #[Route('/', name: 'homepage')]
    public function homepage(Request $request, MailerInterface $mailerInterface): Response
    {
        $contactForm = $this->createForm(ContactType::class);
        $contact = $contactForm->handleRequest($request);
        
        if ($contactForm->isSubmitted() && $contactForm->isValid()) {
            $email = (new TemplatedEmail())
                ->from($contact->get('email')->getData())
                ->to("fred@frederic-caffier.fr")
                ->subject('contact sur le portfolio')
                ->htmlTemplate('default/email.html.twig')
                ->context([
                    'firstname' => $contact->get('firstname')->getData(),
                    'lastname' => $contact->get('lastname')->getData(),
                    'object' => $contact->get('object')->getData(),
                    'mail' => $contact->get('email')->getData(),
                    'message' => $contact->get('message')->getData()
                ]);
            // Envoie du mail
            $mailerInterface->send($email);

            // Confirmation d'envoi + message de confirmation
            $this->addFlash('success', 'Votre email a bien été envoyé');
            return $this->redirectToRoute('homepage', array('_fragment' => 'contact'));
        }

        return $this->render('default/home.html.twig',
        [
            'form' => $contactForm->createView()
        ]);
    }

    #[Route('/project/oskool', name: 'oskool')]
    public function oskool(): Response
    {
        return $this->render('default/oskool.html.twig');
    }

    #[Route('/project/tvshow', name: 'tvshow')]
    public function tvshow(): Response
    {
        return $this->render('default/tvshow.html.twig');
    }

    #[Route('/project/spider', name: 'spider')]
    public function spider(): Response
    {
        return $this->render('default/spider.html.twig');
    }

    #[Route('/project/galaxie', name: 'galaxie')]
    public function galaxie(): Response
    {
        return $this->render('default/galaxie.html.twig');
    }

    #[Route('/project/joyaux', name: 'joyaux')]
    public function joyaux(): Response
    {
        return $this->render('default/joyaux.html.twig');
    }

    #[Route('/project/scrabble', name: 'scrabble')]
    public function scrabble(): Response
    {
        return $this->render('default/scrabble.html.twig');
    }

    #[Route('/project/convertisseur-monnaie', name: 'convertisseur-monnaie')]
    public function convertisseurMonnaie(): Response
    {
        return $this->render('default/convertisseur-monnaie.html.twig');
    }

    #[Route('/project/integration', name: 'integration')]
    public function integration(): Response
    {
        return $this->render('default/integration.html.twig');
    }
}