import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MLDMenu from '../../components/MLDMenu';
import Personal from "../../components/MDFiles";

function AboutPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const renderContent = () => {
    switch (selectedFile) {
      case "personal": return <Personal />;

      default: return <p>Select file</p>;
    }
  }

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden">
      <Header/>

      <main className="flex items-center gap-36 h-10/12">
        <MLDMenu onSelectFile={setSelectedFile} />

        <div className='flex-1 text-gray-200'>
          {renderContent()}
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default AboutPage;