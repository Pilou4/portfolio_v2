<?php

namespace App\Service;

class Counter 
{
    public function incrementCounter (string $file) {
        $counter = 1;
        if (file_exists($file)) {
            $counter = (int)file_get_contents($file);
            $counter ++;
        }
        file_put_contents($file, $counter);
    }

    public function addView ($uri) {
        // $file = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'counter';
        $fileHome = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'counterHome';
        $fileCv = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'counterCv';
        $fileCertificat = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'counterCertificat';
        
        // $file_daily = $file . '-' . date('d-m-Y');
        $file_daily_home = $fileHome . '-' . date('d-m-Y');
        $file_daily_cv = $fileCv . '-' . date('d-m-Y');
        $file_daily_certificat = $fileCertificat . '-' . date('Y-m-d');
        
        if ($uri === '/' ) {
            $this->incrementCounter($fileHome);
            $this->incrementCounter($file_daily_home);
        }

        if ($uri === '/cv/list' ) {
            $this->incrementCounter($fileCv);
            $this->incrementCounter($file_daily_cv);    
        }

        if ($uri === '/cv/certificat' ) {
            $this->incrementCounter($fileCertificat);
            $this->incrementCounter($file_daily_certificat);    
        }

        // $this->incrementCounter($file);
        // $this->incrementCounter($file_daily);
    }
        
    public function numberView (string $file): string {
        // $file = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'counterHome';
        return file_get_contents($file);
    }
    
    public function numberViewMonth (int $year, int $month): int {
        $month = str_pad($month, 2, '0', STR_PAD_LEFT);
        $file = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'counterHome-' . $year . '-' . $month . '-' . '*';
        $files = glob($file);
        $total = 0;

        foreach ($files as $file) {
            $total += (int)file_get_contents($file);

        }

        return $total;
    }

    public function numberViewMonthDetails (int $year, int $month): array {
        $month = str_pad($month, 2, '0', STR_PAD_LEFT);
        $file = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'counterHome-' . $year . '-' . $month . '-' . '*';
        $files = glob($file);
        $views = [];

        foreach ($files as $file) {
            $part = explode('-', basename($file));
            $vues[] = [
                'year' => $part[1],
                'month' => $part[2],
                'day' => $part[3],
                'total' => file_get_contents($file)
            ];
        }

        return $views;
    }
}