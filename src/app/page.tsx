import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown'; // Añadimos esta línea
import Location from '@/components/Location';
import RSVP from '@/components/RSVP';
import Gallery from '@/components/Gallery';
import Gifts from '@/components/Gifts';
import Navbar from '@/components/Navbar';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Countdown /> {/* Añadimos el contador debajo del Hero */}
      <Gallery />
      <Location /> {/* 2. Mostrar */}
      <Gifts/>
      <RSVP />
    </main>
  );
}