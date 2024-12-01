import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <Input id="name" type="text" className="bg-gray-800 text-white" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <Input id="email" type="email" className="bg-gray-800 text-white" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <Textarea id="message" className="bg-gray-800 text-white" rows={4} />
        </div>
        <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">Send Message</Button>
      </form>
    </div>
  )
}

