import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirige automáticamente a la ruta en español
  redirect('/es');
}