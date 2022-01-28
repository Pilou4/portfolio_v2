<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SitemapController extends AbstractController
{
    #[Route('/sitemap', name: 'sitemap', format: 'xml')]
    public function sitemap(
        Request $request,
        ): Response
    {
        $hostname = $request->getSchemeAndHttpHost();

        $urls = [];
        $urls[] = ['loc' => $this->generateUrl('homepage')];
        $urls[] = ['loc' => $this->generateUrl('cv_list')];
        $urls[] = ['loc' => $this->generateUrl('cv_certificat')];
        $urls[] = ['loc' => $this->generateUrl('cv_download')];
        $urls[] = ['loc' => $this->generateUrl('mention')];
        $urls[] = ['loc' => $this->generateUrl('confidentiality')];
        $urls[] = ['loc' => $this->generateUrl('plan')];


        $response = new Response(
            $this->renderView('sitemap/index.html.twig', [
                'hostname' => $hostname,
                'urls' => $urls,
            ]),200
        );

        $response->headers->set('Content-type', 'text/xml');
        
        return $response;

    }
}