import type { Feature, FAQ, Testimonial, ComparisonRow, ProblemCard, Step, CapabilityItem } from "@/types";

export const problemCards: ProblemCard[] = [
  {
    icon: "copy",
    title: "Duplicates everywhere",
    description:
      "Same photo saved 4 times across devices, cloud syncs, and imports. Every backup creates more copies you'll never sort through.",
  },
  {
    icon: "blur",
    title: "Blurry & useless shots",
    description:
      "Half your library is motion blur, accidental screenshots, and test shots you meant to delete months ago.",
  },
  {
    icon: "folder",
    title: "Zero organization",
    description:
      "Files named IMG_4392.HEIC dumped into one giant folder. No structure. No system. No way to find anything.",
  },
];

export const features: Feature[] = [
  {
    id: "smart-cleanup",
    badge: "SMART CLEANUP",
    title: "One click. Every problem found.",
    description:
      "Photiva scans your entire library and instantly groups everything that wastes space: duplicates, blurry shots, screenshots, oversized videos, and Live Photo data. No manual sorting. No guesswork. Just a clear breakdown of what can be cleaned safely.",
    bullets: [
      "Finds exact duplicates with SHA-256 matching",
      "Groups visually similar photos",
      "Flags blurry shots for review",
      "Selects the best frame in bursts",
      "Separates screenshots, Live Photos, and large videos",
    ],
    screenshotLabel: "Photiva Smart Cleanup results showing categorized issues with storage savings",
    screenshot: "/screenshots/smart-cleanup.png",
  },
  {
    id: "duplicate-detection",
    badge: "DUPLICATE DETECTION",
    title: "Find every duplicate. Even the ones that look identical but aren't.",
    description:
      "Three comparison modes catch everything: byte-perfect duplicates, visually similar shots with different crops or edits, and burst series taken seconds apart. Drag the matching threshold slider and watch results regroup in real time.",
    bullets: [
      "Exact file matching (SHA-256) and visual similarity (perceptual hash, color histogram, Vision ML)",
      "Time-based burst grouping for photos taken seconds apart",
      "Live threshold adjustment with results updating instantly",
      "Side-by-side comparison mode for cross-folder detection",
      "Auto-selects the best shot in every group based on sharpness, exposure, and resolution",
    ],
    screenshotLabel: "Photiva Duplicate Detection results showing grouped duplicates with similarity percentage and Auto Mark",
    screenshot: "/screenshots/duplicates.png",
  },
  {
    id: "organization",
    badge: "ORGANIZATION",
    title: "From chaos to a perfectly structured library.",
    description:
      "Choose from 5 organization systems or build your own with custom templates. Photiva reads EXIF data from every photo and sorts your library into a clean folder structure. Preview exactly what will happen before a single file moves.",
    bullets: [
      "5 built-in systems: Chronological, Event-Based, Camera-First, Flat Daily, and Custom templates",
      "Full EXIF metadata extraction: date, camera, GPS, lens info",
      "Event auto-detection using time gaps and GPS coordinates",
      "Live preview of the new folder structure before execution",
      "Rollback support: undo any organization within 30 days",
    ],
    screenshotLabel: "Photiva Organize scan results showing file breakdown, EXIF dates, camera info, and 43 detected events",
    screenshot: "/screenshots/organize.png",
  },
  {
    id: "compression",
    badge: "COMPRESSION",
    title: "Reclaim gigabytes without losing a single memory.",
    description:
      "Compress photos and videos intelligently. Convert bloated JPEGs to HEIF at half the size. Downscale 48MP phone shots to a reasonable resolution. Shrink hour-long 4K videos to a fraction of their size. See estimated savings before you commit.",
    bullets: [
      "HEIF conversion: JPEG/PNG to HEIF at ~50% smaller file size",
      "Quality reduction and resolution downscaling with aspect ratio preserved",
      "Video compression with 3 presets (1080p / 720p / 480p)",
      "Live Photo to still conversion to remove hidden video data",
      "Estimated savings shown before any operation",
    ],
    screenshotLabel: "Photiva Video Compression view showing 68 videos with preset options and estimated savings",
    screenshot: "/screenshots/video-compression.png",
  },
  {
    id: "secure-vault",
    badge: "SECURE VAULT",
    title: "Some photos aren't for everyone.",
    description:
      "Move sensitive photos into an encrypted vault protected by Touch ID. They're hidden from your library, excluded from all cleanup operations, and encrypted with AES-256. Only you can access them.",
    bullets: [
      "AES-GCM 256-bit encryption for all vault contents",
      "Touch ID and macOS password authentication",
      "Hidden from all cleanup and organization operations",
      "Export back to your library anytime",
    ],
    screenshotLabel: "Photiva Secure Vault showing encrypted photos with lock icons and Add Photos button",
    screenshot: "/screenshots/secure-vault.png",
  },
  {
    id: "contact-cleanup",
    badge: "CONTACT CLEANUP",
    title: "Your contacts are a mess too.",
    description:
      "Duplicate contacts pile up from email, iCloud, and phone syncs. Photiva finds them by exact name, phone number, or fuzzy matching and merges them intelligently. Emails, phone numbers, and names are combined. Duplicates are deleted.",
    bullets: [
      "Exact name and phone number matching across all sources",
      "Fuzzy name matching that catches \"John Smith\" vs \"jon smith\" vs \"Jon Smith\"",
      "Smart merge: combines all contact info, deletes duplicates",
    ],
    screenshotLabel: "Photiva Contact Cleanup showing duplicate contacts grouped by name and phone number with Merge and Delete options",
    screenshot: "/screenshots/contact-cleanup.png",
  },
];

export const steps: Step[] = [
  {
    number: 1,
    title: "Drop your folder",
    description:
      "Drag any photo folder into Photiva, or import directly from your Photos Library.",
  },
  {
    number: 2,
    title: "Review the results",
    description:
      "See exactly what was found: duplicates, blurry shots, storage hogs. Every change is previewed before it happens.",
  },
  {
    number: 3,
    title: "Clean up & organize",
    description:
      "One click to clean. One click to organize. Rollback anytime.",
  },
];

export const comparisonRows: ComparisonRow[] = [
  { feature: "One-time purchase", photiva: "Yes", subscriptionApps: "No", freeTools: "Yes" },
  { feature: "Duplicate detection (exact + visual)", photiva: "Yes", subscriptionApps: "Partial", freeTools: "No" },
  { feature: "Blurry photo detection", photiva: "Yes", subscriptionApps: "No", freeTools: "No" },
  { feature: "Smart organization (5 systems)", photiva: "Yes", subscriptionApps: "No", freeTools: "No" },
  { feature: "Event auto-detection", photiva: "Yes", subscriptionApps: "No", freeTools: "No" },
  { feature: "Secure encrypted vault", photiva: "Yes", subscriptionApps: "No", freeTools: "No" },
  { feature: "Photo & video compression", photiva: "Yes", subscriptionApps: "Partial", freeTools: "No" },
  { feature: "Contact cleanup", photiva: "Yes", subscriptionApps: "No", freeTools: "No" },
  { feature: "100% on-device processing", photiva: "Yes", subscriptionApps: "No", freeTools: "Partial" },
  { feature: "Rollback / undo", photiva: "Yes", subscriptionApps: "No", freeTools: "No" },
  { feature: "RAW + sidecar support", photiva: "Yes", subscriptionApps: "Partial", freeTools: "No" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "I recovered over 45 GB of storage just from duplicates and old screenshots. Photiva found things I'd been ignoring for years.",
    name: "Alex Chen",
    role: "Photographer",
  },
  {
    quote:
      "10 years of family photos finally organized into folders I can actually browse. My wife thinks I spent the whole weekend doing it. Took me 20 minutes.",
    name: "Sarah Mitchell",
    role: "Parent of three",
  },
  {
    quote:
      "I use it after every client shoot to clean up rejected shots and organize deliverables. The RAW + sidecar handling alone is worth the price.",
    name: "James Rivera",
    role: "Professional photographer",
  },
];

export const faqs: FAQ[] = [
  {
    question: "Is my data safe?",
    answer:
      "Everything runs locally on your Mac. No data is uploaded anywhere. No accounts, no telemetry, no cloud processing. The vault uses AES-256 encryption with Touch ID authentication.",
  },
  {
    question: "What photo formats are supported?",
    answer:
      "JPEG, PNG, HEIF, HEIC, TIFF, BMP, GIF, WebP, and RAW formats including DNG, CR2, CR3, NEF, ARW, ORF, RW2, RAF, PEF, and SRW. Video formats: MOV, MP4, M4V, and AVI.",
  },
  {
    question: "Can I undo changes?",
    answer:
      "Yes. Organization operations can be rolled back within 30 days. Deleted files are moved to Trash, not permanently erased. You always have a safety net.",
  },
  {
    question: "Does it work with iCloud Photo Library?",
    answer:
      "Photiva works with any folder on your Mac, including locally synced iCloud photos. It can also import directly from your Photos Library database.",
  },
  {
    question: "How is this different from Gemini or CleanMyMac?",
    answer:
      "Photiva combines duplicate detection, smart organization, compression, vault encryption, and contact cleanup in one app with no subscription. Most alternatives only cover one or two of these and charge you every year.",
  },
  {
    question: "Is Photiva free to use?",
    answer:
      "You can download Photiva and scan your entire library for free. You will see all detected duplicates, blurry photos, storage savings, and organization previews before purchasing. A one-time payment unlocks cleanup and full feature access.",
  },
];

export const privacyFeatures = [
  { icon: "cloud-off", label: "No cloud uploads" },
  { icon: "user-x", label: "No account required" },
  { icon: "eye-off", label: "No tracking" },
  { icon: "credit-card-off", label: "No subscription" },
  { icon: "cpu", label: "macOS native" },
  { icon: "zap", label: "Apple Silicon optimized" },
];

export const trustBadges = [
  "macOS native",
  "100% on-device",
  "No subscription",
  "One-time purchase",
];

export const stats = [
  { value: 50000, suffix: "+", label: "Libraries cleaned" },
  { value: 120, suffix: " TB", label: "Storage recovered" },
  { value: 8, suffix: "M+", label: "Duplicates found" },
];

export const capabilities: CapabilityItem[] = [
  {
    icon: "wand",
    title: "Auto Mark",
    description:
      "Adjustable rules help you keep the best photo in each group.",
  },
  {
    icon: "image-search",
    title: "Similar Photos",
    description:
      "Find related shots with an adjustable similarity threshold.",
  },
  {
    icon: "timer",
    title: "Series of Shots",
    description:
      "Set a time gap to group bursts and keep the strongest shots.",
  },
  {
    icon: "lock",
    title: "Auto Lock",
    description:
      "Protect already-sorted photos from accidental marking or removal.",
  },
  {
    icon: "film",
    title: "Movies",
    description:
      "Works with many video formats, including AVI, MKV, and WMV.",
  },
  {
    icon: "edit",
    title: "Edited Photos",
    description:
      "Detects resized, rotated, and edited versions from popular apps.",
  },
  {
    icon: "layout",
    title: "Photo Browser",
    description:
      "Browse with EXIF details, movie preview, Quick Look, and path view.",
  },
  {
    icon: "type",
    title: "Batch Renaming",
    description:
      "Rename files in bulk while copying or moving for cleaner organization.",
  },
  {
    icon: "trash-safe",
    title: "Safe Removal",
    description:
      "Moves files to Trash so you can restore anything if needed.",
  },
  {
    icon: "file-image",
    title: "Image Formats",
    description:
      "Supports popular formats including RAW, HEIC, PDF, DNG, and WebP.",
  },
  {
    icon: "columns",
    title: "Results Sorting",
    description:
      "Review One by One, Face-to-Face, or All in One with one-click marking.",
  },
  {
    icon: "sliders",
    title: "Powerful Settings",
    description:
      "Tune search settings for similar shots and burst groups.",
  },
  {
    icon: "zap",
    title: "Blazing Fast",
    description:
      "Optimized for 64-bit, Apple Silicon, and multicore performance.",
  },
  {
    icon: "monitor",
    title: "macOS Native",
    description:
      "Built for modern macOS with a clean native interface.",
  },
  {
    icon: "sparkles",
    title: "And More",
    description:
      "A complete toolset with regular updates and refinements.",
  },
];

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Guides", href: "/guides" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];
