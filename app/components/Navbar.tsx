"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import Button from "./Button"
import { motion, AnimatePresence } from "framer-motion"
import ShineUnderlineEffect from "./UnderlineEffect"
import Image from "next/image"
import { Menu, X } from "lucide-react"

type NavbarProps = {
  className?: string
}

const Navbar = ({ className }: NavbarProps) => {
  const [isActive, setIsActive] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const [messageLength, setMessageLength] = useState(0)
  const [isScienceDropdownOpen, setIsScienceDropdownOpen] = useState(false)
  const MAX_CHARS = 500

  useEffect(() => {
    document.body.style.overflow = isActive || isSubmenuOpen ? "hidden" : "auto"
    document.body.style.position = isSubmenuOpen ? "fixed" : ""
    document.body.style.width = isSubmenuOpen ? "100%" : ""
    document.body.style.touchAction = isSubmenuOpen ? "none" : ""
  }, [isActive, isSubmenuOpen])

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setMessageLength(text.length)
    if (text.length > MAX_CHARS) {
      e.target.value = text.slice(0, MAX_CHARS)
      setMessageLength(MAX_CHARS)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      })
      await res.json()
      form.reset()
      setMessageLength(0)
      setShowThankYou(true)
      setTimeout(() => {
        setIsActive(false)
        setTimeout(() => setShowThankYou(false), 500)
      }, 2000)
    } catch (error) {
      console.error(error)
      alert("There was an error submitting your enquiry. Please try again.")
    }
  }

  const navbarClassName = `duration-700 sticky top-0 z-50 flex items-center justify-between bg-[#fafafa] p-6 text-textPrimary transition-transform font-Satoshi h-20 md:h-16 translate-y-0 ${className}`

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
  }

  const overlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 0.5 }, exit: { opacity: 0 } }

  const formVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } } }

  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen)
  const toggleScienceDropdown = () => setIsScienceDropdownOpen(!isScienceDropdownOpen)

  return (
    <nav className={navbarClassName} style={{ position: "sticky", transitionTimingFunction: "cubic-bezier(0.64, 0, 0.35, 1)" }}>
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="mt-3 flex-shrink-0">
          <Image src="/logos/Mending_Mindets.png" alt="Mending Mindsets Logo" width={80} height={80} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden flex-grow items-center justify-center md:flex">
          <ul className="flex space-x-10 uppercase">
            <li
              onMouseEnter={() => setIsScienceDropdownOpen(true)}
              onMouseLeave={() => setIsScienceDropdownOpen(false)}
              className="relative"
            >
              <Link href="/science">
                <ShineUnderlineEffect>
                  <span className="cursor-pointer">The Science</span>
                </ShineUnderlineEffect>
              </Link>

              <AnimatePresence>
                {isScienceDropdownOpen && (
                  <motion.ul
                    className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg bg-white shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <li>
                      <Link href="/research" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Research Studies
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Useful Links
                      </Link>
                    </li>
                    <li>
                      <Link href="/conditions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/self-assessment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Self-Assessment
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li>
              <ShineUnderlineEffect>
                <Link href="/#services">Services</Link>
              </ShineUnderlineEffect>
            </li>
            <li>
              <ShineUnderlineEffect>
                <Link href="/info">About</Link>
              </ShineUnderlineEffect>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="sticky top-0 md:hidden">
          <button
            onClick={toggleSubmenu}
            className="fixed right-4 top-4 z-50 flex items-center justify-center rounded-full bg-textSecondary p-2 text-white hover:bg-opacity-90"
          >
            {isSubmenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>

          <AnimatePresence>
            {isSubmenuOpen && (
              <>
                {/* Overlay */}
                <motion.div
                  className="fixed inset-0 min-h-screen bg-black"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={toggleSubmenu}
                />

                {/* Menu */}
                <motion.div
                  className="fixed inset-y-0 right-0 min-h-screen w-full max-w-sm bg-white shadow-lg md:hidden"
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="flex flex-col p-6 pt-12 space-y-2">
                    <Link href="/" onClick={toggleSubmenu} className="block text-xl font-medium text-gray-900">
                      Home
                    </Link>

                    {/* The Science parent + permanently expanded submenu */}
                    <div className="flex flex-col">
                      <Link href="/science" onClick={toggleSubmenu} className="block text-xl font-medium text-gray-900">
                        The Science
                      </Link>
                      <div className="ml-4 flex flex-col space-y-1">
                        <Link href="/science" onClick={toggleSubmenu} className="block text-lg text-gray-700">
                          The Science
                        </Link>
                        <Link href="/research" onClick={toggleSubmenu} className="block text-lg text-gray-700">
                          Research Studies
                        </Link>
                        <Link href="/resources" onClick={toggleSubmenu} className="block text-lg text-gray-700">
                          Useful Links
                        </Link>
                        <Link href="/conditions" onClick={toggleSubmenu} className="block text-lg text-gray-700">
                          Conditions
                        </Link>
                        <Link href="/self-assessment" onClick={toggleSubmenu} className="block text-lg text-gray-700">
                          Self-Assessment
                        </Link>
                      </div>
                    </div>

                    <Link href="/#services" onClick={toggleSubmenu} className="block text-xl font-medium text-gray-900">
                      Services
                    </Link>
                    <Link href="/info" onClick={toggleSubmenu} className="block text-xl font-medium text-gray-900">
                      About
                    </Link>
                    <Link href="/contact" onClick={toggleSubmenu} className="block text-xl font-medium text-gray-900">
                      Contact
                    </Link>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Contact Form Modal */}
        <motion.div
          className="fixed z-50 hidden md:flex items-center justify-center inset-0 bg-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="relative flex w-[80%] max-w-5xl flex-col rounded-[25px] border-2 border-black bg-textSecondary shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {showThankYou ? (
                  <div className="flex h-full w-full items-center justify-center rounded-[25px] p-12 text-center text-white">
                    <div>
                      <h2 className="mb-4 text-3xl font-medium">Thank you for your enquiry!</h2>
                      <p>We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                ) : (
                  <form className="flex h-full w-full flex-col md:flex-row" onSubmit={handleSubmit}>
                    {/* Left side */}
                    <div className="hidden md:flex md:w-1/2 flex-col justify-center p-12 text-[#3C3C3C]">
                      <h1 className="mb-6 text-6xl">Contact us today</h1>
                      <div className="mb-10 h-[1px] bg-black opacity-10" />
                      <p className="mb-4">
                        Please fill out the form to learn more about Chronic Pain Recovery and how it can be applied to your everyday life.
                      </p>
                      <p className="mb-4">We will get back to you as quickly as we can.</p>
                      <p className="mb-4">
                        Alternatively, contact via Tel / WhatsApp:
                        <a href="tel:+353892335106" className="font-bold hover:underline">
                          +353 (0) 89-233-5106
                        </a>
                      </p>
                    </div>

                    {/* Right side */}
                    <div className="flex w-full flex-col justify-center rounded-[25px] bg-white p-12 md:w-1/2 space-y-4">
                      <h1 className="text-3xl font-medium md:hidden">Contact us today</h1>
                      <div className="h-[1px] bg-black opacity-10 md:hidden"></div>

                      <div>
                        <label htmlFor="name" className="mb-2 block">Name *</label>
                        <input type="text" id="name" name="name" required className="w-full rounded border border-gray-300 p-2" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block">Email *</label>
                        <input type="email" id="email" name="email" required className="w-full rounded border border-gray-300 p-2" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block">Phone *</label>
                        <input type="tel" id="phone" name="phone" required className="w-full rounded border border-gray-300 p-2" />
                      </div>
                      <div>
                        <label htmlFor="message" className="mb-2 block">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          maxLength={MAX_CHARS}
                          className="w-full rounded border border-gray-300 p-2"
                          onChange={handleMessageChange}
                        ></textarea>
                        <div className="mt-1 text-sm text-gray-500">{messageLength}/{MAX_CHARS} characters</div>
                      </div>
                      <button type="submit" className="rounded-full bg-textSecondary px-6 py-2 text-white">Submit</button>
                      <p>By continuing, you agree to our Terms & Conditions and our Privacy Policy.</p>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact Form Toggle Button */}
        <span className="z-50 hidden md:flex">
          <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
        </span>
      </div>
    </nav>
  )
}

export default Navbar
