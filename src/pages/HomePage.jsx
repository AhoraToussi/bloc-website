import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Truck, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">BLOC</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          High-performance automatic bollards engineered for elegance and security.
        </p>
        <Button className="text-lg px-8 py-4">Discover Products</Button>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose BLOC?</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card><CardContent className="text-center p-6"><ShieldCheck className="mx-auto mb-4 w-10 h-10" /><h3 className="font-bold text-lg mb-2">Built to Last</h3><p>316 stainless steel, IP68 waterproof, tamper-proof design.</p></CardContent></Card>
          <Card><CardContent className="text-center p-6"><Zap className="mx-auto mb-4 w-10 h-10" /><h3 className="font-bold text-lg mb-2">Battery Powered</h3><p>Fast-rise bollards with 36V DC motors. No wiring needed.</p></CardContent></Card>
          <Card><CardContent className="text-center p-6"><Truck className="mx-auto mb-4 w-10 h-10" /><h3 className="font-bold text-lg mb-2">Nationwide Delivery</h3><p>Shipped across the UK with optional install support.</p></CardContent></Card>
          <Card><CardContent className="text-center p-6"><CheckCircle className="mx-auto mb-4 w-10 h-10" /><h3 className="font-bold text-lg mb-2">Certified & Tested</h3><p>All products inspected and certified before shipping.</p></CardContent></Card>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-black text-white">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-xl mb-6">Request a quote or discuss your project.</p>
        <Button className="bg-white text-black text-lg px-6 py-3">Contact Us</Button>
      </section>
    </div>
  );
}