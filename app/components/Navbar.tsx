"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import Button from "./Button"
import { motion, AnimatePresence } from "framer-motion"
import ShineUnderlineEffect from "./UnderlineEffect"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

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
    document.body.style.overflow = isActive ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isActive])

  useEffect(() => {
    if (isSubmenuOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
      document.body.style.touchAction = "none"
    } else {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.touchAction = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.width = ""
      document.body.style.touchAction = ""
    }
  }, [isSubmenuOpen])

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
      console.log(error)
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

  return (
    <nav
      className={navbarClassName}
      style={{ position: "sticky", transitionTimingFunction: "cubic-bezier(0.64, 0, 0.35, 1)" }}
    >
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <li>
                      <Link href="/research" className="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Research Studies
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources" className="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Useful Links
                      </Link>
                    </li>
                    <li>
                      <Link href="/conditions" className="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/self-assessment" className="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
            onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            className="fixed right-4 top-4 z-50 flex items-center justify-center rounded-full bg-textSecondary p-2 text-white"
          >
            {isSubmenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>

          <AnimatePresence>
            {isSubmenuOpen && (
              <>
                <motion.div
                  className="fixed inset-0 min-h-screen bg-black"
                  variants={overlayVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => setIsSubmenuOpen(false)}
                />

                <motion.div
                  className="fixed inset-y-0 right-0 min-h-screen w-full max-w-sm bg-white shadow-lg md:hidden"
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="flex flex-col">
                    <div className="flex-1">
                      <ul className="space-y-4 p-8 pt-12">
                        <li className="flex flex-col">
                          <div className="flex items-center justify-between">
                            <Link
                              href="/science"
                              className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 hover:bg-gray-100 flex-1"
                              onClick={() => setIsSubmenuOpen(false)}
                            >
                              The Science
                            </Link>
                            <button
                              onClick={() => setIsScienceDropdownOpen(!isScienceDropdownOpen)}
                              className="p-2"
                            >
                              <ChevronDown
                                className={`h-6 w-6 transform transition-transform ${
                                  isScienceDropdownOpen ? "rotate-180" : "rotate-0"
                                }`}
                              />
                            </button>
                          </div>

                          {/* Mobile Submenu */}
                          <AnimatePresence>
                            {isScienceDropdownOpen && (
                              <motion.ul
                                className="ml-6 mt-2 space-y-2"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <li>
                                  <Link
                                    href="/research"
                                    className="block rounded-lg px-6 py-2 text-gray-900 hover:bg-gray-100"
                                    onClick={() => setIsSubmenuOpen(false)}
                                  >
                                    Research Studies
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/resources"
                                    className="block rounded-lg px-6 py-2 text-gray-900 hover:bg-gray-100"
                                    onClick={() => setIsSubmenuOpen(false)}
                                  >
                                    Useful Links
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/conditions"
                                    className="block rounded-lg px-6 py-2 text-gray-900 hover:bg-gray-100"
                                    onClick={() => setIsSubmenuOpen(false)}
                                  >
                                    Conditions
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/self-assessment"
                                    className="block rounded-lg px-6 py-2 text-gray-900 hover:bg-gray-100"
                                    onClick={() => setIsSubmenuOpen(false)}
                                  >
                                    Self-Assessment
                                  </Link>
                                </li>
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </li>

                        <li>
                          <Link
                            href="/#services"
                            className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 hover:bg-gray-100"
                            onClick={() => setIsSubmenuOpen(false)}
                          >
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/info"
                            className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 hover:bg-gray-100"
                            onClick={() => setIsSubmenuOpen(false)}
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            className="block rounded-lg px-6 py-4 text-xl font-medium text-gray-900 hover:bg-gray-100"
                            onClick={() => setIsSubmenuOpen(false)}
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Form Toggle */}
        <span className="z-50 hidden md:flex">
          <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
        </span>
      </div>
    </nav>
  )
}

export default Navbar
