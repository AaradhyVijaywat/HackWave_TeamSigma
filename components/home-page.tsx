"use client";
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"

export function HomePage() {
  const router = useRouter();
  const handleUpload = async (event : any) => {
    const input = event.target;
    router.push('/visualize');
    if (input && input.files && input.files.length > 0) {
        const formData = new FormData();
        for(let i=0; i< input.files.length; i++) {
          formData.append('files', input.files[i]);
        }
        const response = await fetch('http://localhost:4500/upload', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        console.log(data);
    } else {
        console.error('No folder selected');
    }
};

const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.click();
    input.addEventListener('change', handleUpload);
};

  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-br from-gray-900 to-gray-500">
      <header className="relative z-10">
        <div className="container flex items-center justify-between py-4 px-4 md:py-6 md:px-6">
          <Link className="flex items-center space-x-2 font-medium" href="/">
            <AutoAwesomeMosaicIcon className="h-6 w-6" />
            <span className="text-lg font-semibold text-white">DataViz</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="flex items-center text-sm font-medium text-gray-400 transition-colors  dark:text-gray-400"
              href="/"
            >
              Home
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-white transition-colors hover:text-white/80 dark:text-gray-50 dark:hover:text-gray-50/80"
              href="/features"
            >
              Features
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-white transition-colors hover:text-white/80 dark:text-gray-50 dark:hover:text-gray-50/80"
              href="/more"
            >
              More
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button size="sm" variant="outline" className="text-white">
              <UploadIcon className="h-4 w-4 mr-2 text-white" />
              Upload
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 grid items-center justify-center gap-1 p-4 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Visualize Data</h1>
          <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Upload a csv file to visualize it.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
          <Button onClick={handleClick} size="lg" className='gap-3'><FolderCopyIcon className='text-gray-900' /> Upload File</Button>
        </div>
      </main>
    </div>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}

