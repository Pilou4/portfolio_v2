<?php

namespace App\Controller;

use App\Service\Counter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/cv', name: 'cv_')]
class CvController extends AbstractController
{
    #[Route('/list', name: 'list')]
    public function list(Counter $counter, Request $request): Response
    {
        $uri = $request->server->get('REQUEST_URI');
        $counter->addView($uri);

        return $this->render('cv/list.html.twig');
    }

    #[Route('/certificat', name: 'certificat')]
    public function certificat(Counter $counter, Request $request): Response
    {
        $uri = $request->server->get('REQUEST_URI');
        $counter->addView($uri);

        return $this->render('cv/certificat.html.twig');
    }

    #[Route('/download/cv', name: 'download')]
    public function downloadCVr()
    {
        // cette methode est un raccourcis pour créer une Response qui contient le contenu du fichier fourni
        // cette reponse configure automatiquement les en-tete HTTP pour que le fichier sdoit telechargé par le navigateur
        // https://symfony.com/doc/current/controller.html#streaming-file-responses
        return $this->file('assets' . DIRECTORY_SEPARATOR .'files' . DIRECTORY_SEPARATOR .'cv-frederic-caffier.pdf');
    }
}
