<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Meneses\LaravelMpdf\Facades\LaravelMpdf as PDF;

class HomeController extends Controller
{
    public function index()
    {
        //return view('ticket_2');

        $pdf = PDF::loadView('ticket_2', []);
        //return $pdf->stream('document.pdf');

        try {
            $mpdf = new Mpdf(['debug' => true, 'allow_output_buffering' => true]);
            $mpdf->showImageErrors = true;
            $mpdf->use_kwt = true;
            $html = view('tickets')->render();
            $mpdf->WriteHTML($html);
            $mpdf->Output('ticket.pdf', \Mpdf\Output\Destination::INLINE);
        } catch (\Mpdf\MpdfException $e) { // Note: safer fully qualified exception name used for catch
            // Process the exception, log, print etc.
            echo $e->getMessage();
        }

        /*$pdf = App::make('dompdf.wrapper');
        $pdf->loadHTML('<h1>Your HTML Here</h1>');
        return $pdf->stream();*/

    }

    public function heart()
    {
        return view('test_heart');
    }

    public function pdfJs()
    {
        return view('pdfjs');
    }

}
