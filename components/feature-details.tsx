import { Button } from "./ui/button"
import { UploadIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export function FeatureDetails() {
  return (
    <div className="w-full bg-transparent mb-10">
      <div className="relative grid gap-12 lg:gap-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#F9FAFB]">Photo Combination</h1>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Combine two photos into one with the power of machine learning. Our model uses advanced algorithms to
                seamlessly merge your images, creating stunning compositions that look natural and professional.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 px-4 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-2">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="https://www.shutterstock.com/image-vector/ai-artificial-intelligence-wave-lines-600nw-1469973338.jpg"
              width="550"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#F9FAFB]">Seamless Blending</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our model intelligently merges the two images, ensuring a smooth transition between them.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#F9FAFB]">Customizable Fusion</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Users can adjust the blending settings to achieve the desired combination, giving them full control
                    over the final result.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#F9FAFB]">High-Quality Output</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The resulting composite image maintains high resolution and image quality, preserving the details of
                    the original photos.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 px-4 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#F9FAFB]">How it Works</h3>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our photo combination model leverages the latest advancements in machine learning, specifically in the
                field of image processing and computer vision. When a user submits two images for merging, the model
                first analyzes the content and structure of each photo, identifying key features, objects, and areas of
                interest. It then uses a process called feature matching to align the images and find corresponding
                points that will enable seamless blending. Next, the model applies sophisticated blending techniques,
                such as gradient-based fusion and content-aware morphing, to create a natural and harmonious
                composition. Finally, the merged image is returned to the user, ready to be shared or further enhanced.
              </p>
            </div>
          </div>
          <div className="grid gap-2">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="https://media.licdn.com/dms/image/D4D12AQGRGChE1Pu-qQ/article-cover_image-shrink_720_1280/0/1711134546157?e=2147483647&v=beta&t=ekm5q4jwibaggC6hxq5Yjm16cw9gFFtkdMI8Vaf6HHI"
              width="550"
            />
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 px-4 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-2">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-fit object-center sm:w-full"
              height="310"
              src="https://webassets.mongodb.com/_com_assets/cms/Screenshot%202024-02-15%20at%208.01.12%E2%80%AFAM-e0vrftq2aq.png"
              width="550"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#F9FAFB]">
                Benefits of Photo Combination
              </h3>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The ability to merge photos seamlessly opens up a world of creative possibilities for photographers,
                designers, and visual artists. With our photo combination feature, users can:
              </p>
            </div>
            <ul className="grid gap-6">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#F9FAFB]" />
                <span className="font-medium text-[#F9FAFB]">Enhance Storytelling:</span>
                Merge images to create compelling visual narratives and captivating photo montages.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#F9FAFB]" />
                <span className="font-medium text-[#F9FAFB]">Artistic Expression:</span>
                Blend photos to produce unique and artistic compositions, exploring the boundaries of creativity.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-[#F9FAFB]" />
                <span className="font-medium text-[#F9FAFB]">Professional Touch:</span>
                Achieve professional-looking photo combinations that seamlessly integrate elements such as landscapes,
                people, and objects.
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 px-4 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#F9FAFB]">Try It Yourself</h3>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ready to experience the magic of photo combination? Upload your images and let our powerful machine
                learning model transform them into stunning compositions. Whether you want to merge photos, create
                double exposures, or blend different scenes, our platform makes it easy to achieve professional-quality
                results.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link className="flex items-center space-x-4" href={'/'}>
            <Button size="sm" variant="outline" className="text-white">
              <UploadIcon className="h-4 w-4 mr-2 text-white" />
              Upload
            </Button>
          </Link>
            </div>
          </div>
          <div className="grid gap-2">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/home.png"
              width="550"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
