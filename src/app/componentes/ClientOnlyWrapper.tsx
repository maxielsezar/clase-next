"use client";

import { useEffect, useState, ReactNode } from 'react';

interface ClientOnlyWrapperProps {
  children: ReactNode;
}

// Usa la interfaz en la definición del componente
const ClientOnlyWrapper = ({ children }: ClientOnlyWrapperProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    // Renderiza un placeholder vacío o un spinner en el servidor y durante la primera carga
    return null; 
  }

  // Solo renderiza el contenido (tu componente Radio) en el cliente
  return <>{children}</>;
};

export default ClientOnlyWrapper;