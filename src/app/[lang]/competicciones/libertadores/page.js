'use client';

import { useIdioma } from '../../../HeaderContextLayout'; // Ajusta los ../ según tu ruta
import { noticiasLibertadores } from '@/data/libertadores/libertadoresData'; // Asegúrate que este sea el path correcto
import Image from 'next/image';

export default function LibertadoresPage() {
  const { idioma } = useIdioma();
  const noticia = noticiasLibertadores[0]; // Tomamos la primera noticia

  if (!noticia) return <p>Cargando...</p>;

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{noticia[idioma].titulo}</h1>
      <Image src={noticia.imagen} alt={noticia[idioma].titulo} width={800} height={400} />
      <p><strong>{noticia[idioma].subtitulo}</strong></p>
      <p>{noticia[idioma].contenido}</p>
      <p><em>{noticia[idioma].fecha} | {noticia[idioma].tiempoLectura}</em></p>
    </div>
  );
}