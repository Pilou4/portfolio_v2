<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PlanController extends AbstractController
{
    #[Route('/plan', name: 'plan')]
    public function plan(
        Request $request,
        // CategoryRepository $categoryRepository,
        // PostRepository $postRepository,
        ): Response
    {
        $hostname = $request->getSchemeAndHttpHost();

        $urls = [];
        $urls[] = ['loc' => $this->generateUrl('homepage')];
        // $urls[] = ['loc' => $this->generateUrl('oskool')];
        // $urls[] = ['loc' => $this->generateUrl('tvshow')];
        // $urls[] = ['loc' => $this->generateUrl('spider')];
        // $urls[] = ['loc' => $this->generateUrl('galaxie')];
        // $urls[] = ['loc' => $this->generateUrl('joyaux')];
        // $urls[] = ['loc' => $this->generateUrl('scrabble')];
        // $urls[] = ['loc' => $this->generateUrl('integration')];
        // $urls[] = ['loc' => $this->generateUrl('convertisseur-monnaie')];
        $urls[] = ['loc' => $this->generateUrl('cv_list')];
        $urls[] = ['loc' => $this->generateUrl('cv_certificat')];
        $urls[] = ['loc' => $this->generateUrl('cv_download')];
        $urls[] = ['loc' => $this->generateUrl('mention')];
        $urls[] = ['loc' => $this->generateUrl('confidentiality')];
        $urls[] = ['loc' => $this->generateUrl('plan')];
        // $urls[] = ['loc' => $this->generateUrl('app_login')];
        // $urls[] = ['loc' => $this->generateUrl('create_account')];
        // $urls[] = ['loc' => $this->generateUrl('confirm_account')];
        // $urls[] = ['loc' => $this->generateUrl('forgotten_password')];
        // $urls[] = ['loc' => $this->generateUrl('change_password')];
        // $urls[] = ['loc' => $this->generateUrl('password_reset')];
        // $urls[] = ['loc' => $this->generateUrl('post_list')];
        // $urls[] = ['loc' => $this->generateUrl('category_list')];

        // foreach ($postRepository->findAll() as $post) {
        //     $urls[] = [
        //         'loc' => $this->generateUrl('post_view',  ['slug' => $post->getSlug()]), 
        //         'lastmod' => $post->getCreatedAt()->format('d-m-Y')
        //     ];
        // }
        // foreach ($categoryRepository->findAll() as $categories) {
        //     $urls[] = [
        //         'loc' => $this->generateUrl('category_view',  ['id' => $categories->getId()]), 
        //     ];
        // }

        return $this->render('plan/list.html.twig', [
            'hostname' => $hostname,
            'urls' => $urls
        ]);
    }
}