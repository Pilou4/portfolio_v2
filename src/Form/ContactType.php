<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add(
            'firstname',
            TextType::class, 
            [
                'label' => false,
                'required' => true,
                'label_attr' => ['class' => 'home__contact__form__label'],
                'attr' => [
                    'class' => 'home__contact__form__input',
                    'placeholder' => 'votre prénom'
                ]
            ]
        );

        $builder->add(
            'lastname',
            TextType::class, 
            [
                'label' => false,
                'required' => true,
                'label_attr' => ['class' => 'home__contact__form__label'],
                'attr' => [
                    'class' => 'home__contact__form__input',
                    'placeholder' => 'votre nom'
                ]
            ]
        );

        $builder->add(
            'object',
            TextType::class, 
            [
                'label' => false,
                'required' => true,
                'label_attr' => ['class' => 'home__contact__form__label'],
                'attr' => [
                    'class' => 'home__contact__form__input',
                    'placeholder' => 'sujet'
                ]
            ]
        );
        $builder->add(
            'email',
            EmailType::class,
            [
                'label' => false,
                'required' => true,
                'label_attr' => ['class' => 'home__contact__form__label'],
                'attr' => [
                    'class' => 'home__contact__form__input',
                    'placeholder' => 'votre email'
                ]
            ]
        );
        $builder->add(
            'message',
            TextareaType::class, 
            [
                'label' => false,
                'required' => true,
                'label_attr' => ['class' => 'home__contact__form__label'],
                'attr' => [
                    'class' => 'home__contact__form__textarea',
                    'placeholder' => 'votre message'
                ]
            ]
        );
        $builder->add(
            'agreeTerms',
            CheckboxType::class, [
                'mapped' => false,
                'label' => "En soumettant ce formulaire, j'accepte 
                que mes données personnelles soient utilisées pour 
                me recontacter. Aucun autre traitement ne sera effectué 
                avec mes informations.",
                'constraints' => [
                    new IsTrue([
                        'message' => 'You should agree to our terms.',
                    ]),
                ],
            ]
        );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}