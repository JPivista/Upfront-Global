'use client'
import Header from '../../components/Header'
import About from './Media'
import Footer from '../../components/Footer'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const OldUrlPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new URL
    router.replace('/media-publications');
  }, []);

  // You can also render some content if needed
  return (
    <div>
      Redirecting...
    </div>
  );
};

export default OldUrlPage;
