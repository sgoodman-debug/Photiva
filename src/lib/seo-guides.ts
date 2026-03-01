import type { Metadata } from "next";

export const SITE_URL = "https://photiva.app";

export type GuideSlug =
  | "remove-duplicate-photos-mac"
  | "find-blurry-photos-mac"
  | "organize-apple-photos-library"
  | "mac-photo-cleaner"
  | "photiva-vs-gemini";

interface GuideSection {
  question: string;
  paragraphs: string[];
}

interface GuideFaq {
  question: string;
  answer: string;
}

interface GuideData {
  slug: GuideSlug;
  primaryKeyword: string;
  title: string;
  description: string;
  h1: string;
  quickAnswer: string[];
  entitySentence: string;
  sections: GuideSection[];
  manualMethod: string[];
  manualLimitations: string[];
  howPhotivaHelps: string[];
  pros: string[];
  cons: string[];
  faqs: GuideFaq[];
  ctaHeading: string;
  ctaCopy: string;
}

const realRating: { value: string; count: string } | null = null;

export const guideOrder: GuideSlug[] = [
  "remove-duplicate-photos-mac",
  "find-blurry-photos-mac",
  "organize-apple-photos-library",
  "mac-photo-cleaner",
  "photiva-vs-gemini",
];

export const guideLabels: Record<GuideSlug, string> = {
  "remove-duplicate-photos-mac": "Remove Duplicate Photos on Mac",
  "find-blurry-photos-mac": "Find Blurry Photos on Mac",
  "organize-apple-photos-library": "Organize Apple Photos Library",
  "mac-photo-cleaner": "Mac Photo Cleaner Guide",
  "photiva-vs-gemini": "Photiva vs Gemini 2",
};

export const guideData: Record<GuideSlug, GuideData> = {
  "remove-duplicate-photos-mac": {
    slug: "remove-duplicate-photos-mac",
    primaryKeyword: "remove duplicate photos mac",
    title: "Remove Duplicate Photos on Mac | Photiva Guide",
    description:
      "Learn how to remove duplicate photos on Mac with a safe manual workflow and a faster on-device Photiva method for accurate cleanup and safer long-term control.",
    h1: "How to Remove Duplicate Photos on Mac Without Deleting the Wrong Shots",
    quickAnswer: [
      "To remove duplicate photos on Mac, start with Apple Photos' built-in Duplicates album, then review each pair before merging. That works for basic duplicate cleanup, but it usually misses near-duplicates, edited copies, screenshots saved in multiple locations, and duplicates outside the Photos app.",
      "If your library is large, a dedicated workflow is safer. You need exact-file checks for true duplicates, visual comparison for similar copies, and a rollback path so mistakes are recoverable. Without those controls, manual deletion can remove a preferred edit or the higher-quality original.",
      "Photiva combines cryptographic exact matching, visual similarity analysis, and review-first cleanup so you can remove duplicate photos on Mac quickly while keeping full control over what stays in your library.",
    ],
    entitySentence:
      "Photiva is a macOS photo cleaner app designed to remove duplicate, blurry, and similar photos while organizing your Apple Photos library with fully on-device processing.",
    sections: [
      {
        question: "Why do duplicate photos keep appearing on Mac?",
        paragraphs: [
          "Duplicate photos usually come from sync overlap rather than one obvious mistake. iCloud Photos, AirDrop, Messages attachments, Finder imports, and edited exports can all create additional copies of the same memory with small metadata differences. Over time, your library accumulates exact duplicates, edited variants, and nearly identical burst shots that look the same during casual browsing.",
          "The challenge is that not every duplicate should be treated the same way. Some copies have higher resolution, richer metadata, or edits you want to keep. A reliable cleanup process has to detect duplicate classes separately, then help you choose the best file in each group. That is why duplicate cleanup is not just deletion; it is a quality-preservation workflow."
        ],
      },
      {
        question: "How can you detect exact duplicates versus visually similar photos?",
        paragraphs: [
          "Exact duplicates are file-level matches. The most dependable method is hashing each file and comparing cryptographic fingerprints. If two files share the same SHA-256 value, they are byte-for-byte identical and one can be removed safely after confirmation.",
          "Visually similar photos are different files that depict nearly the same scene. They often differ due to edits, compression, or small crops. Detecting these requires perceptual hashing plus machine-learning-assisted visual comparison. Keeping exact and similar detection separate helps avoid accidental deletions while still reducing clutter that Apple Photos often leaves behind."
        ],
      },
      {
        question: "What is the safest manual method to remove duplicate photos on Mac?",
        paragraphs: [
          "A manual workflow starts in Apple Photos by opening the Duplicates album and reviewing each group before merging. For Finder-based folders, sort by file name, date, and size, then compare suspected copies in Quick Look. Create a temporary review album so you can verify selections before sending anything to Trash.",
          "After each cleanup pass, inspect your Recently Deleted area and restore anything questionable. Keep a Time Machine backup before major deletion sessions, especially if you manage professional archives or family history collections. Manual cleanup can work for smaller libraries if you follow a disciplined review process and avoid one-click bulk deletion."
        ],
      },
      {
        question: "Why does manual duplicate cleanup break down at scale?",
        paragraphs: [
          "Manual review quality drops as volume grows. A library with 40,000 images can contain thousands of near-duplicates spread across years, projects, and devices. Context switching between folders and albums increases the chance of deleting a keeper and retaining an inferior copy.",
          "Manual methods also miss hidden storage waste, such as duplicated Live Photo video segments and large derivative exports. Even if you complete a full pass once, the same cycle returns after new imports. Scalable cleanup needs repeatable rules, quality scoring, and automated grouping that you can audit quickly."
        ],
      },
      {
        question: "How should you choose which duplicate to keep?",
        paragraphs: [
          "Prioritize image quality first: sharpness, exposure, and resolution. Then compare metadata completeness, including EXIF capture date, lens data, and location tags, because these fields improve future organization and search quality. If one version contains edits you rely on, preserve it and archive alternatives.",
          "A practical rule set is to keep the sharpest high-resolution original, retain edited deliverables you actively use, and discard lower-quality copies or unnecessary exports. This keeps your library useful, not just smaller. It also aligns duplicate cleanup with long-term retrieval goals rather than short-term storage savings alone."
        ],
      },
      {
        question: "How does duplicate cleanup improve Mac performance and storage planning?",
        paragraphs: [
          "Removing duplicates frees SSD space, but the bigger advantage is library responsiveness. Smaller, cleaner collections reduce indexing overhead, simplify backup cycles, and speed up visual review. Large iCloud libraries also sync more predictably when low-value duplicate data is removed.",
          "Operationally, duplicate cleanup gives you a better baseline for additional optimization, such as HEIF conversion, archive exports, and event-based organization. Once duplicate noise is gone, every downstream workflow becomes more accurate because your tools are working on cleaner source material."
        ],
      },
      {
        question: "What workflow should professionals use when cleaning client archives?",
        paragraphs: [
          "Professional photographers and content teams should treat duplicate cleanup as a governed process with clear gates. Start with a read-only scan, export grouped reports, and document keep rules for edited masters, RAW originals, and delivery exports. This prevents accidental loss of revenue-critical assets and gives teams repeatable standards for future projects.",
          "A reliable professional workflow also separates archival preservation from active workspace cleanup. Keep untouched master backups on external storage, then run duplicate cleanup on working copies with rollback enabled. This two-layer model protects client deliverables while still reclaiming storage and reducing review fatigue in daily production environments."
        ],
      },
      {
        question: "How can families and shared Mac users avoid duplicate cleanup conflicts?",
        paragraphs: [
          "In shared households, duplicate cleanup often fails because one person optimizes for storage while another optimizes for memories. Create household rules first: protect favorites, preserve key events, and review deletions in weekly batches. A collaborative process reduces disagreements and avoids permanent mistakes from rushed decisions.",
          "Use event tags and dedicated family albums to mark non-negotiable photos before cleanup. Then process duplicates in staged rounds so everyone can verify what remains. This approach creates confidence for non-technical users and makes cleanup sustainable even when multiple devices and import habits feed the same library."
        ],
      },
      {
        question: "What monthly maintenance checklist keeps duplicate clutter from returning?",
        paragraphs: [
          "A practical monthly checklist includes four steps: scan new imports, resolve duplicate groups, review blurry outliers, and convert oversized files when appropriate. Keeping sessions short and frequent is more effective than infrequent large cleanups, because small changes are easier to verify and less risky to roll back.",
          "Track progress with simple metrics such as duplicates removed, gigabytes reclaimed, and number of events normalized. These indicators help you catch drift early and confirm your process is working. Over time, monthly maintenance reduces total cleanup effort while preserving a high-quality, searchable photo library."
        ],
      },
    ],
    manualMethod: [
      "Open Apple Photos and check the Duplicates album first. Merge only after zooming into each item and confirming quality differences.",
      "For folders outside Photos, sort in Finder by size and date, then compare with Quick Look to validate suspected duplicates.",
      "Move candidates to a temporary review folder before final deletion, and keep Time Machine snapshots enabled for recovery.",
    ],
    manualLimitations: [
      "Apple Photos Duplicates does not consistently catch edited or near-identical variants.",
      "Finder review is slow and error-prone for large libraries with similar file names.",
      "No built-in scoring for blur, exposure, or best-shot selection across burst groups.",
      "No dedicated rollback workflow for organization decisions beyond general system restore paths.",
    ],
    howPhotivaHelps: [
      "SHA-256 duplicate detection identifies exact file-level duplicates with deterministic confidence.",
      "Perceptual hashing plus Vision ML finds visually similar shots that are not byte-identical.",
      "Laplacian variance blur detection highlights lower-quality options before you delete.",
      "EXIF-based organization and event auto-detection keep the remaining photos structured after cleanup.",
      "HEIF conversion plus compression reduces storage after deduplication without cloud uploads.",
      "30-day rollback safety lets you recover from cleanup mistakes.",
      "100% on-device privacy keeps photo analysis local to your Mac.",
    ],
    pros: [
      "Comprehensive duplicate coverage across exact and similar images.",
      "Safer decision-making with quality signals and rollback controls.",
      "Faster review workflows for large libraries.",
      "No subscription and no cloud processing required.",
    ],
    cons: [
      "Manual-only workflows remain viable for very small libraries and occasional cleanup.",
      "Professional users still need external backup strategy beyond app-level rollback.",
      "Any automation requires initial review preferences to be configured correctly.",
    ],
    faqs: [
      {
        question: "Can I remove duplicate photos on Mac without deleting originals?",
        answer:
          "Yes. Use grouped review and quality checks before deletion. A rollback window and backup strategy reduce risk when processing large libraries.",
      },
      {
        question: "Does Apple Photos find all duplicates?",
        answer:
          "No. It helps with many exact duplicates, but it can miss edited variants and cross-folder near-duplicates outside Photos.",
      },
      {
        question: "What is the difference between duplicate and similar photos?",
        answer:
          "Duplicates are exact file matches. Similar photos are visually related files that differ by edits, crop, size, or encoding.",
      },
      {
        question: "How much storage can duplicate cleanup recover?",
        answer:
          "Results vary by library size, but users often recover meaningful SSD space once duplicates, burst leftovers, and repeated exports are removed.",
      },
      {
        question: "Is duplicate cleanup safe with iCloud Photos?",
        answer:
          "It is safe when done carefully. Validate changes in small batches and confirm synchronization before large deletion rounds.",
      },
      {
        question: "Why is rollback important for duplicate cleanup?",
        answer:
          "Rollback lets you restore content if a kept/deleted decision turns out to be wrong after later review.",
      },
      {
        question: "Can I run duplicate cleanup regularly?",
        answer:
          "Yes. Monthly or post-import passes prevent backlog and keep photo libraries easier to maintain.",
      },
    ],
    ctaHeading: "Ready to remove duplicate photos on Mac in one guided workflow?",
    ctaCopy:
      "Use Photiva to detect exact duplicates and visually similar images, then clean safely with rollback protection.",
  },
  "find-blurry-photos-mac": {
    slug: "find-blurry-photos-mac",
    primaryKeyword: "find blurry photos mac",
    title: "Find Blurry Photos on Mac | Photiva Guide",
    description:
      "Find blurry photos on Mac with a practical quality workflow. Compare manual review limits against Photiva blur detection, safer cleanup decisions, and upkeep.",
    h1: "How to Find Blurry Photos on Mac and Keep Only Sharp Shots",
    quickAnswer: [
      "To find blurry photos on Mac, you can manually zoom through Apple Photos and mark low-quality shots, but this method is slow and subjective for large libraries. It is easy to miss minor blur in previews or delete a useful frame when reviewing quickly.",
      "A stronger approach combines algorithmic blur scoring with side-by-side review. You want objective quality signals, not just visual guessing, especially for burst sets, event photos, and low-light images where the best frame is not always obvious at thumbnail size.",
      "Photiva applies blur detection and similarity grouping together, so you can identify blurred photos, compare alternatives, and remove only low-value images without moving your library to the cloud.",
    ],
    entitySentence:
      "Photiva is a macOS photo cleaner app designed to remove duplicate, blurry, and similar photos while organizing your Apple Photos library with local-only analysis.",
    sections: [
      {
        question: "Why do blurry photos accumulate so quickly on Mac?",
        paragraphs: [
          "Modern phones capture bursts, Live Photos, and rapid sequences that preserve many imperfect frames. Most users keep entire sets because reviewing each shot is time-consuming. Over months, slight motion blur, focus misses, and low-light softness create a large volume of images that add little value but still consume storage.",
          "Blurry image buildup is not only a quality problem. It also reduces browsing speed and makes it harder to find the best memories quickly. A clean library should prioritize clarity, not quantity. That means separating blur analysis from duplicate detection so each cleanup action has a clear purpose and measurable outcome."
        ],
      },
      {
        question: "How can you evaluate blur objectively instead of guessing?",
        paragraphs: [
          "Manual blur judgment often depends on screen size and reviewer fatigue. Objective methods use edge-detail analysis to estimate sharpness mathematically. Higher edge contrast generally indicates better focus, while low-contrast edges can indicate blur from camera shake or missed focus.",
          "A practical blur workflow combines algorithmic ranking with human confirmation. Let software flag low-sharpness images first, then confirm candidates in context against nearby alternatives. This balances speed and trust, especially in professional or family archives where fully automatic deletion is risky."
        ],
      },
      {
        question: "What is the best manual method to find blurry photos on Mac?",
        paragraphs: [
          "Start by filtering photos by event or date range and review in full-screen mode. Zoom to critical detail areas like eyes, text, or edges rather than relying on thumbnails. Add probable blurry frames to a review album instead of deleting immediately.",
          "After creating a candidate set, compare each frame against nearby shots to keep the best version. Delete only after a second pass and confirm that no required image exists only in the blurry group. Manual review can work when image counts are low and your tolerance for time investment is high."
        ],
      },
      {
        question: "What limitations make manual blur cleanup inefficient?",
        paragraphs: [
          "Manual blur detection scales poorly beyond a few thousand images. The process is repetitive, and inconsistency increases as sessions get longer. Slightly soft photos are particularly difficult to classify quickly, causing indecision and uneven cleanup quality.",
          "Manual review also fails to prioritize impact. Without size, similarity, and event context, you may spend time on low-value items while large blurry videos or repeated soft frames remain untouched. Efficient cleanup needs prioritized queues, confidence indicators, and quick grouping by related shots."
        ],
      },
      {
        question: "How should you decide what to delete when multiple similar shots exist?",
        paragraphs: [
          "Use a keep-first strategy: pick the strongest frame in each burst by sharpness, composition, and emotional value, then remove weaker options. This prevents over-deletion and makes each decision explicit. If two images are close, keep the one with better exposure and cleaner subject detail.",
          "When in doubt, defer deletion rather than forcing a choice. A staged cleanup pipeline with temporary holding folders improves accuracy. Over time, pattern-based review becomes easier once software groups related shots and surfaces the lowest-quality candidates first."
        ],
      },
      {
        question: "How does blur cleanup support long-term organization and retrieval?",
        paragraphs: [
          "Removing low-quality images improves album quality and speeds visual search. It reduces noise in auto-generated memories and helps metadata-based sorting surface meaningful content. Clean libraries are easier to maintain, share, and back up.",
          "Blur cleanup also complements duplicate detection and compression. Once poor-quality images are removed, the remaining set is more suitable for archival conversion and event organization. This sequence turns cleanup into a repeatable system instead of isolated one-off tasks."
        ],
      },
      {
        question: "How do you handle artistic blur versus accidental blur?",
        paragraphs: [
          "Not all blur is a defect. Motion effects, shallow depth-of-field portraits, and intentional creative softness should be preserved when they support the story of the image. The practical rule is context: if blur is clearly deliberate and compositionally strong, keep it; if blur obscures the subject and reduces clarity, flag it for removal.",
          "A review workflow should include a protected label for intentional creative shots before running bulk decisions. This allows objective blur scoring to identify technical failures while still respecting aesthetic intent. Separating intentional blur from accidental blur is critical for photographers, creators, and anyone curating high-quality personal archives."
        ],
      },
      {
        question: "What role does burst-photo cleanup play in blur reduction?",
        paragraphs: [
          "Burst sequences are one of the largest sources of blurry photos because they capture many intermediate frames during motion. Instead of reviewing each frame in isolation, compare burst groups together and keep one or two winners per sequence. This dramatically reduces decision count while improving final album quality.",
          "Use quality-first ranking within bursts: prioritize eye sharpness, exposure balance, and subject expression. Then remove lower-ranked frames that add little value. When burst cleanup is integrated into blur detection, users can reduce both storage waste and visual noise without sacrificing important moments."
        ],
      },
      {
        question: "How can you build a repeatable quality-control routine after every import?",
        paragraphs: [
          "The most reliable routine is import, scan, review, and archive in a fixed order. After each major import, run blur detection immediately while memory context is fresh. Keep a short review queue for borderline shots and finalize deletion during a second pass to reduce impulsive choices.",
          "Pair this routine with monthly health checks that review unresolved blur candidates and validate event albums. Over time, your library quality trend becomes stable because low-value images are filtered continuously instead of accumulating. Consistent quality control makes every future search, slideshow, and backup noticeably better."
        ],
      },
      {
        question: "What mistakes should you avoid when deleting blurry photos in bulk?",
        paragraphs: [
          "The biggest mistake is deleting based on one weak signal, such as a low sharpness score, without comparing nearby alternatives. Some frames may be technically soft but still capture unique expressions or moments that are not repeated elsewhere. Always validate context before final removal, especially for family milestones or once-in-a-lifetime events.",
          "Another common mistake is running long cleanup sessions without checkpoints. Decision quality drops with fatigue, and borderline images get misclassified. Use smaller batches, pause between sessions, and keep a temporary holding set for uncertain frames. This approach improves confidence and avoids irreversible losses while still allowing meaningful blur reduction over time."
        ],
      },
    ],
    manualMethod: [
      "Review by date or event in Apple Photos full-screen mode and zoom to fine detail before deciding.",
      "Create a dedicated 'Blur Candidates' album for staged decisions instead of immediate deletion.",
      "Compare frames within each burst and keep one clear winner per scene.",
    ],
    manualLimitations: [
      "High time cost for large libraries.",
      "Subjective blur decisions vary by reviewer and display conditions.",
      "No objective ranking score in native workflows.",
      "No integrated rollback controls specific to blur decisions.",
    ],
    howPhotivaHelps: [
      "Laplacian variance blur detection ranks low-sharpness images for fast review.",
      "Perceptual hashing + Vision ML groups related shots so you compare similar frames together.",
      "SHA-256 detection handles exact duplicate cleanup in the same pass.",
      "EXIF-based organization and event auto-detection keep surviving images structured.",
      "HEIF conversion and compression reclaim additional space after blur cleanup.",
      "30-day rollback supports safe decision reversal.",
      "100% on-device privacy keeps quality analysis on your Mac.",
    ],
    pros: [
      "Objective blur prioritization reduces review fatigue.",
      "Faster identification of low-value images in large libraries.",
      "Safer cleanup with rollback and review-first flow.",
      "Integrates blur, duplicates, and organization in one process.",
    ],
    cons: [
      "Final keep/delete decisions still require user judgment for borderline shots.",
      "Some artistic soft-focus photos should be manually protected.",
      "Users need an initial pass to define acceptable sharpness thresholds.",
    ],
    faqs: [
      {
        question: "Can Mac Photos automatically detect blur?",
        answer:
          "Not comprehensively. Manual review is possible, but dedicated blur scoring provides much better coverage and consistency.",
      },
      {
        question: "What is Laplacian variance in photo cleanup?",
        answer:
          "It is a sharpness metric based on edge detail. Lower variance often indicates blur and helps prioritize review candidates.",
      },
      {
        question: "Should I delete every blurry photo?",
        answer:
          "No. Keep meaningful moments even if slightly soft, but remove low-value duplicates and failed frames.",
      },
      {
        question: "Can blur cleanup improve storage?",
        answer:
          "Yes. Large low-quality bursts and repeated soft frames can consume substantial space over time.",
      },
      {
        question: "Does on-device blur analysis protect privacy?",
        answer:
          "Yes. Local analysis means photo content does not leave your Mac for quality scoring.",
      },
      {
        question: "How often should I run blur cleanup?",
        answer:
          "Run it after large imports or monthly to prevent quality drift in your library.",
      },
      {
        question: "Can I combine blur and duplicate cleanup in one workflow?",
        answer:
          "Yes. Combining both reduces repeated review effort and leads to cleaner final collections.",
      },
    ],
    ctaHeading: "Need a faster way to find blurry photos on Mac?",
    ctaCopy:
      "Run blur scoring, compare similar shots, and clean your library with rollback safety in Photiva.",
  },
  "organize-apple-photos-library": {
    slug: "organize-apple-photos-library",
    primaryKeyword: "organize apple photos library",
    title: "Organize Apple Photos Library | Photiva Guide",
    description:
      "Organize Apple Photos library with a repeatable system. Learn manual steps, common bottlenecks, and how Photiva automates structure, event grouping, and cleanup",
    h1: "How to Organize Apple Photos Library Into a System You Can Maintain",
    quickAnswer: [
      "To organize Apple Photos library effectively, start with a repeatable framework: remove clutter first, group photos by event and date, and standardize naming and album rules. Random one-time sorting sessions usually fail because new imports quickly break the structure.",
      "Manual Apple Photos organization can work for small collections, but larger libraries need automation for metadata extraction, event grouping, and file normalization. Without those steps, organization becomes a constant maintenance burden instead of a stable system.",
      "Photiva helps by combining cleanup and organization in one local workflow so your Apple Photos library stays structured, searchable, and easier to maintain over time.",
    ],
    entitySentence:
      "Photiva is a macOS photo cleaner app designed to remove duplicate, blurry, and similar photos while organizing your Apple Photos library without cloud uploads.",
    sections: [
      {
        question: "Why does Apple Photos library organization fail over time?",
        paragraphs: [
          "Most libraries become chaotic because imports come from different devices and contexts. Screenshots, social exports, edited copies, and Live Photos enter the same timeline as meaningful captures. Without consistent rules, albums become incomplete and folders stop reflecting real-world events.",
          "Another common issue is starting organization before cleanup. Duplicates and blurry frames multiply workload and dilute event grouping. Effective organization starts by reducing low-value content, then applying structure to the remaining high-quality set. That sequence improves both speed and final clarity."
        ],
      },
      {
        question: "What organization model works best for long-term maintenance?",
        paragraphs: [
          "A maintainable model uses predictable dimensions: date, event, and source. Date-based folders provide baseline order, event segmentation adds context, and camera/source tags improve filtering. This layered structure works for both personal memory archives and professional collections.",
          "Keep rules simple enough to apply consistently. If your system is too detailed, you will stop using it after a few weeks. The best model is one that handles daily imports without manual renaming, while still allowing custom albums for major themes like travel, family, or client work."
        ],
      },
      {
        question: "How can you organize Apple Photos library manually?",
        paragraphs: [
          "Begin with a cleanup pass: remove obvious duplicates and failed shots. Next, create top-level albums by year and key categories, then move to monthly or event-level subgroups. Use keywords and favorites strategically rather than tagging everything.",
          "For best results, run organization in batches. Process one year or one major archive source at a time. Validate each batch before continuing so mistakes do not cascade. Manual organization is feasible, but it demands discipline and time that many users cannot maintain consistently."
        ],
      },
      {
        question: "What manual bottlenecks slow down Apple Photos organization?",
        paragraphs: [
          "Metadata inconsistency is a major bottleneck. Photos from scanners, messaging apps, or exports often have incomplete EXIF fields, making date or location sorting unreliable. Users end up making manual corrections that do not scale.",
          "Another bottleneck is event detection. Identifying where one event ends and another begins requires time and context. Without automated grouping by time gaps and location changes, organizing years of photos becomes an exhausting sequence of micro-decisions."
        ],
      },
      {
        question: "How should you handle Live Photos, HEIC, and large media during organization?",
        paragraphs: [
          "Live Photos and high-resolution media consume significant space and can clutter timelines. If your goal is clean browsing and efficient backups, convert low-priority Live Photos to stills and standardize image formats where possible.",
          "HEIF conversion is particularly useful for reducing archive size while preserving quality for everyday viewing. Pair format optimization with event grouping so storage savings and organization progress happen together. This prevents repeated passes over the same media set."
        ],
      },
      {
        question: "How can you keep your organized library clean after initial setup?",
        paragraphs: [
          "Sustainable organization depends on routine maintenance. Add a monthly review cycle that handles new duplicates, blur outliers, and misfiled imports before backlog grows. Small recurring sessions are safer and more effective than annual full resets.",
          "Use clear intake rules for new media. Decide where screenshots, downloads, and edits belong as soon as they enter your system. This turns organization into an ongoing habit rather than a one-time project that degrades over time."
        ],
      },
      {
        question: "How should you organize family, travel, and work photos differently?",
        paragraphs: [
          "Different photo categories require different retention logic. Family memories often prioritize emotional context, travel libraries prioritize place and timeline, and work libraries prioritize client and deliverable status. Applying one global rule to all categories usually creates friction and misclassification over time.",
          "A better approach is shared core structure with category-specific tags. Keep year and event consistency across the whole library, then apply special labels for client names, destinations, or family milestones. This hybrid model preserves simplicity while still supporting deeper retrieval needs when you search later."
        ],
      },
      {
        question: "What metadata fields matter most for robust Apple Photos organization?",
        paragraphs: [
          "Capture date and timezone are foundational because they anchor chronology correctly across travel and device sync scenarios. Location fields help event grouping, while camera and lens metadata can support workflow-specific views for enthusiasts and professional users. Missing or incorrect values should be corrected early in the process.",
          "Keywords and album labels should be used sparingly but consistently. Over-tagging creates noise and reduces usability. Focus on durable tags that remain useful years later, such as people, trip names, or major projects. Metadata quality directly determines how useful your library will be for future retrieval."
        ],
      },
      {
        question: "How can teams or households maintain one organization standard on shared Macs?",
        paragraphs: [
          "Shared libraries need documented conventions. Define where imports go, which tags are required, and who approves major restructuring. A short operations checklist prevents accidental divergence when multiple users contribute media from phones, cameras, and messaging apps.",
          "Set a recurring review meeting for high-impact batches such as travel archives or annual backups. Collaborative verification catches mistakes early and improves trust in the system. When everyone follows the same structure, the library remains usable regardless of who performed the most recent import or cleanup task."
        ],
      },
      {
        question: "What backup strategy should you pair with Apple Photos organization?",
        paragraphs: [
          "Organization should always run alongside backup discipline. Keep at least one versioned backup before major restructuring, ideally with Time Machine plus an external archive for critical collections. If metadata edits or folder moves go wrong, recovery should be immediate and predictable rather than dependent on memory or manual reconstruction.",
          "For long-term reliability, schedule backup verification after each major organization batch. Confirm that albums, metadata, and file paths are captured correctly in restore points. This turns organization from a risky one-way operation into a reversible workflow. Strong backups do not replace good organization, but they make confident cleanup and restructuring possible at scale."
        ],
      },
      {
        question: "How do you verify your organization system is actually working?",
        paragraphs: [
          "Validation should be practical, not theoretical. Test retrieval speed by searching for specific events, people, and date ranges, then confirm results are complete and easy to navigate. If you still struggle to find important moments quickly, your structure may look tidy but remain functionally weak.",
          "Also monitor maintenance effort. A successful organization system should reduce time spent on each new import. If weekly intake is getting easier and fewer photos remain uncategorized, your rules are working. This performance-based validation helps you refine structure decisions with evidence instead of guesswork."
        ],
      },
    ],
    manualMethod: [
      "Run cleanup first, then build albums by year and event.",
      "Use EXIF date, location, and camera metadata to sort consistently.",
      "Standardize naming and run organization in manageable batches.",
    ],
    manualLimitations: [
      "Metadata gaps force manual correction.",
      "Event detection is hard without automated time/location logic.",
      "Large media sets make sorting and format normalization slow.",
      "Inconsistent upkeep causes structure to degrade again.",
    ],
    howPhotivaHelps: [
      "EXIF-based organization applies consistent structure across large libraries.",
      "Event auto-detection groups photos based on timeline and context shifts.",
      "SHA-256 and perceptual matching remove duplicate noise before organization.",
      "Laplacian variance identifies weak-quality shots to filter early.",
      "HEIF conversion and compression optimize storage while organizing.",
      "30-day rollback protects against accidental moves.",
      "100% on-device privacy keeps metadata and media local.",
    ],
    pros: [
      "Creates a repeatable system instead of ad-hoc sorting.",
      "Improves search, browsing, and backup efficiency.",
      "Combines cleanup and organization in one pipeline.",
      "Retains privacy with local-only processing.",
    ],
    cons: [
      "Requires initial setup and rule decisions.",
      "Legacy libraries with poor metadata may need extra review.",
      "No organization system is fully maintenance-free.",
    ],
    faqs: [
      {
        question: "What is the best way to organize Apple Photos library by date?",
        answer:
          "Use EXIF capture date as the primary key, then layer event and category grouping for better retrieval.",
      },
      {
        question: "Should I organize before removing duplicates?",
        answer:
          "No. Remove duplicates and obvious low-value shots first to avoid organizing clutter.",
      },
      {
        question: "How do I organize photos from multiple devices?",
        answer:
          "Normalize metadata and source tags, then apply one consistent folder/album model across all imports.",
      },
      {
        question: "Can event detection be automated?",
        answer:
          "Yes. Time-gap and location-aware event detection can auto-group captures that belong together.",
      },
      {
        question: "Does HEIF conversion help with organization?",
        answer:
          "It supports organization by reducing storage pressure, making backups and long-term management easier.",
      },
      {
        question: "How often should I maintain an organized library?",
        answer:
          "Monthly maintenance is usually enough to keep new imports from creating another backlog.",
      },
      {
        question: "Can I undo organization mistakes?",
        answer:
          "Yes, if your workflow includes rollback support and backups.",
      },
    ],
    ctaHeading: "Want to organize Apple Photos library without manual sorting fatigue?",
    ctaCopy:
      "Photiva combines metadata-driven organization, event grouping, and safe rollback in a single macOS workflow that stays manageable as your library grows each month and new imports arrive from every device and source over time consistently.",
  },
  "mac-photo-cleaner": {
    slug: "mac-photo-cleaner",
    primaryKeyword: "mac photo cleaner",
    title: "Mac Photo Cleaner Guide | Photiva",
    description:
      "Choosing a Mac photo cleaner? Compare manual cleanup with Photiva's local-first workflow for duplicates, blur filtering, organization, and storage recovery.",
    h1: "What Makes the Best Mac Photo Cleaner for Real Library Cleanup",
    quickAnswer: [
      "A good Mac photo cleaner should do more than delete obvious duplicates. It should detect exact and similar images, identify blur, manage large videos, and organize your remaining library so clutter does not return.",
      "Many tools focus on one narrow task and leave you to manually finish the rest. That means cleanup sessions become fragmented, and you repeat work across apps. For high-intent users, the best outcome is a single workflow that covers detection, review, action, and safe rollback.",
      "Photiva is built as an all-in-one macOS photo cleaner with on-device processing, one-time purchase pricing, and feature depth that supports both quick wins and long-term maintenance.",
    ],
    entitySentence:
      "Photiva is a macOS photo cleaner app designed to remove duplicate, blurry, and similar photos while organizing your Apple Photos library with privacy-first local processing.",
    sections: [
      {
        question: "What should a Mac photo cleaner actually solve?",
        paragraphs: [
          "A serious cleaner should solve library quality, not only disk usage. Users need fewer duplicates, fewer blurry shots, better structure, and faster retrieval. Storage savings matter, but clarity and maintainability are the long-term value metrics.",
          "The best tools align detection methods with real-world photo problems: exact duplicates from sync, similar images from burst or edits, and noisy captures from motion or low light. If those categories are not handled explicitly, cleanup remains incomplete and clutter rebounds quickly."
        ],
      },
      {
        question: "How do you evaluate Mac photo cleaner accuracy?",
        paragraphs: [
          "Accuracy depends on method transparency and review control. Exact duplicate detection should use cryptographic checks. Similarity detection should use perceptual models with adjustable thresholds. Blur detection should provide objective scoring, not opaque labels.",
          "Evaluation should also include false-positive risk. A cleaner that saves time but deletes keepers is not acceptable for memory archives. Reliable tools expose grouped results, allow quick comparisons, and support undo paths. Accuracy is not only detection precision; it is decision safety end to end."
        ],
      },
      {
        question: "Can you clean a Mac photo library manually without a dedicated app?",
        paragraphs: [
          "Yes, but the process is slow: review duplicates in Photos, compare folders in Finder, inspect blur manually, and then reorganize albums. This multi-step process can work for small libraries when users are highly organized and willing to invest time.",
          "The limitation is fragmentation. Manual cleanup requires switching contexts and repeating comparison work. Without automation, users often stop halfway or postpone maintenance until clutter becomes overwhelming again. A dedicated cleaner reduces this friction by combining core cleanup stages in one interface."
        ],
      },
      {
        question: "Why does privacy matter when choosing a Mac photo cleaner?",
        paragraphs: [
          "Photos often contain personal documents, children, travel history, and private moments. Cloud-first cleaners can introduce data exposure concerns, especially if uploads are required for analysis. Privacy-conscious users increasingly prefer local processing for sensitive media.",
          "On-device analysis is also operationally simpler. You avoid upload delays, bandwidth limits, and cloud retention uncertainty. For many users, privacy and speed are linked: local tools process immediately and keep control where it belongs, directly on the Mac."
        ],
      },
      {
        question: "How does pricing model affect long-term cleanup strategy?",
        paragraphs: [
          "Subscription tools can be reasonable for continuous workflows, but many users only need periodic cleanup and prefer predictable one-time cost. A one-time model encourages ownership mindset and regular maintenance without recurring billing friction.",
          "Pricing should be weighed against workflow coverage. A cheaper narrow tool may still cost more in time because you need additional apps for blur, organization, and compression. A complete cleaner with no subscription can be more efficient financially and operationally over multiple years."
        ],
      },
      {
        question: "What output should you expect after running a full cleanup cycle?",
        paragraphs: [
          "A successful cycle should deliver measurable outcomes: duplicates removed, blurry shots reduced, storage reclaimed, and clear folder or event structure applied. You should also leave with a maintenance routine, not just a one-time result.",
          "The final library should feel faster to browse and easier to back up. If cleanup does not improve retrieval speed and confidence, it likely focused too narrowly on deletion. The best Mac photo cleaner supports both immediate cleanup and ongoing library health."
        ],
      },
      {
        question: "How do feature checklists help you avoid buying the wrong cleaner?",
        paragraphs: [
          "Before choosing any app, create a checklist aligned to your real pain points: exact duplicates, near-duplicates, blur detection, event organization, compression, and safety controls. This prevents impulse decisions based on marketing claims that do not translate to your daily workflow needs.",
          "A checklist also makes tradeoffs explicit. If one tool is fast but lacks organization, you can estimate the extra manual time required later. If another tool has broader coverage with local privacy, you can justify higher initial effort. Structured evaluation reduces regret and improves long-term tool fit."
        ],
      },
      {
        question: "What signals indicate a cleaner is ready for large photo libraries?",
        paragraphs: [
          "Large-library readiness depends on scan reliability, grouping quality, and review performance. Look for clear progress visibility, deterministic duplicate methods, and responsive comparison interfaces that remain usable across tens of thousands of files. Slow or opaque workflows become risky at scale.",
          "Recovery safeguards are equally important. A robust cleaner should support staged review, reversible actions, and predictable post-cleanup reporting. Without these controls, scale amplifies errors. A tool that works on 2,000 photos can fail badly at 80,000 unless safety and workflow design were built for volume."
        ],
      },
      {
        question: "How should you measure ROI from a Mac photo cleaner over one year?",
        paragraphs: [
          "Measure both technical and operational outcomes: storage reclaimed, time saved per import cycle, and reduction in failed searches for specific memories. Track whether monthly maintenance becomes shorter and whether backups complete faster after cleanup. These indicators show whether the tool is improving your whole system.",
          "Financial ROI should include subscription avoidance, reduced external storage purchases, and lower opportunity cost from manual sorting. Even modest monthly time savings compound significantly over a year. The best Mac photo cleaner pays off by preserving attention and keeping your library usable, not by chasing raw deletion numbers alone."
        ],
      },
      {
        question: "When should you upgrade from manual cleanup to a dedicated Mac photo cleaner?",
        paragraphs: [
          "Upgrade when manual sessions become inconsistent, delayed, or error-prone. Typical signals include rising duplicate backlog, frequent uncertainty about what to keep, and growing frustration with searching old memories. If cleanup feels like a recurring project instead of a quick maintenance task, a dedicated cleaner usually delivers better long-term efficiency.",
          "Another signal is workflow fragmentation. If you currently use separate tools for duplicates, blur review, organization, and compression, integration can save substantial time and reduce mistakes. A dedicated cleaner is most valuable when it shortens decision loops and gives you repeatable monthly maintenance with clear recovery safeguards."
        ],
      },
      {
        question: "What setup steps improve results in the first week with a new cleaner?",
        paragraphs: [
          "First-week setup should focus on safety and confidence. Start with a medium-size sample library, review grouping behavior, and tune similarity thresholds before processing your full archive. This calibration stage helps you understand tool behavior and reduces anxiety about large cleanup sessions.",
          "Next, define keep rules in advance: preferred resolution, edited-version policy, and event priority. Run one full test cycle, then evaluate outcomes with a short checklist for quality, speed, and recoverability. Teams that invest in early setup usually experience faster month-two maintenance and fewer decision errors long term."
        ],
      },
    ],
    manualMethod: [
      "Identify duplicates in Photos and Finder with cautious side-by-side checks.",
      "Run manual blur review in full-screen mode and keep only strongest frames.",
      "Organize surviving media by date and event, then archive large video outliers.",
    ],
    manualLimitations: [
      "High manual effort across multiple tools.",
      "Inconsistent detection of near-duplicates and weak-quality frames.",
      "Difficult to maintain routine cleanup at scale.",
      "Limited integrated rollback and prioritization.",
    ],
    howPhotivaHelps: [
      "SHA-256 exact matching removes redundant files reliably.",
      "Perceptual hashing + Vision ML surfaces visually similar photos.",
      "Laplacian variance blur detection prioritizes low-sharpness candidates.",
      "EXIF-based organization and event auto-detection keep the library structured.",
      "HEIF conversion and compression reduce storage without cloud dependency.",
      "30-day rollback provides safety for cleanup decisions.",
      "100% on-device privacy protects sensitive media.",
    ],
    pros: [
      "Covers full cleanup lifecycle in one app.",
      "One-time purchase at $29.99 with no subscription.",
      "Strong privacy posture through local processing.",
      "Useful for both casual users and large library owners.",
    ],
    cons: [
      "Users with tiny libraries may not need advanced workflows immediately.",
      "Initial threshold tuning improves results but takes a short setup pass.",
      "Backup planning is still the user's responsibility.",
    ],
    faqs: [
      {
        question: "What is the best Mac photo cleaner for duplicates and similar photos?",
        answer:
          "Use a tool that combines exact hashing and visual similarity detection with review controls and rollback.",
      },
      {
        question: "Do I need a subscription for a good Mac photo cleaner?",
        answer:
          "Not necessarily. One-time purchase tools can provide complete cleanup workflows without recurring fees.",
      },
      {
        question: "Can a Mac photo cleaner organize Apple Photos too?",
        answer:
          "Yes, if it supports EXIF-driven sorting and event-based grouping beyond simple duplicate removal.",
      },
      {
        question: "Is cloud upload required for photo cleaning?",
        answer:
          "No. On-device tools can analyze and clean your library entirely locally.",
      },
      {
        question: "How do I avoid deleting important memories?",
        answer:
          "Use review-first groups, keep-best rules, and rollback-enabled cleanup.",
      },
      {
        question: "Does cleaning photos improve Mac speed?",
        answer:
          "A cleaner library can improve browsing responsiveness and reduce backup and sync overhead.",
      },
      {
        question: "Can I clean both photos and videos together?",
        answer:
          "Yes, if your tool supports large video detection and compression as part of cleanup.",
      },
    ],
    ctaHeading: "Looking for a Mac photo cleaner that does more than duplicates?",
    ctaCopy:
      "Photiva gives you duplicate, blur, similarity, organization, and compression tools in one local-first workflow.",
  },
  "photiva-vs-gemini": {
    slug: "photiva-vs-gemini",
    primaryKeyword: "photiva vs gemini 2",
    title: "Photiva vs Gemini 2 | Detailed Comparison",
    description:
      "Photiva vs Gemini 2 comparison for Mac users who need duplicate cleanup plus blur detection, organization depth, and a privacy-first workflow for monthly use.",
    h1: "Photiva vs Gemini 2: Which Mac Photo Cleanup Workflow Is More Complete?",
    quickAnswer: [
      "If your goal is only to find obvious duplicates, Gemini 2 can help with that specific use case. If you need broader cleanup including blurry-photo filtering, Apple Photos organization, HEIF conversion, and event-based structure, Photiva provides a more complete workflow in one app.",
      "Comparison should focus on scope, not just duplicate detection speed. High-intent users usually want one repeatable process that covers detection, review, cleanup, and post-cleanup organization with privacy safeguards.",
      "Photiva is positioned as a full macOS photo cleaner system, while Gemini 2 is generally used as a narrower duplicate-focused utility. The right choice depends on whether you need depth beyond deduplication.",
    ],
    entitySentence:
      "Photiva is a macOS photo cleaner app designed to remove duplicate, blurry, and similar photos while organizing your Apple Photos library with 100% on-device processing.",
    sections: [
      {
        question: "What should you compare first in Photiva vs Gemini 2?",
        paragraphs: [
          "Start with workflow coverage. Ask whether you only need duplicate detection or a broader cleanup pipeline. Duplicate-only tooling can still leave blurry photos, oversized media, and disorganized albums untouched, which means storage and usability problems remain.",
          "Next compare control and safety. You need grouped review, confidence signals, and rollback capacity before deleting at scale. A complete comparison is not just feature count; it is how well each tool supports accurate decisions across an entire library lifecycle."
        ],
      },
      {
        question: "How do duplicate detection methods differ in practical use?",
        paragraphs: [
          "Both workflows can surface duplicates, but practical results depend on grouping quality and review ergonomics. Exact matches are straightforward; the more important question is how similar-but-not-identical images are surfaced and ranked for action.",
          "Users with edited photos, burst sequences, and cross-device imports benefit from adjustable similarity thresholds and quality-aware selection logic. In practice, this determines how much manual work remains after initial scan results are generated."
        ],
      },
      {
        question: "Does the comparison change if you also need blurry photo detection?",
        paragraphs: [
          "Yes. Blur detection changes the cleanup objective from storage-only to quality optimization. If your library includes many weak frames, removing duplicates alone does not materially improve browsing quality or album curation.",
          "A workflow with objective blur scoring lets you keep stronger shots while reducing noise. This is especially useful for family events, travel bursts, and low-light captures where near-identical options differ mainly in sharpness."
        ],
      },
      {
        question: "Why does organization capability matter in Photiva vs Gemini 2 decisions?",
        paragraphs: [
          "After cleanup, organization determines whether your library stays manageable. If tooling stops at dedupe, you still need a second process for event grouping, metadata-driven sorting, and archive structure. Many users underestimate this second phase until backlog returns.",
          "When organization is integrated, cleanup and structure reinforce each other. You reduce clutter first, then apply event and EXIF logic to a cleaner dataset. This produces a library that is easier to search and maintain instead of a temporary storage reduction win."
        ],
      },
      {
        question: "How do privacy and processing model affect the outcome?",
        paragraphs: [
          "Both privacy expectations and speed improve when analysis runs locally on-device. For photo libraries with sensitive content, avoiding cloud uploads is often non-negotiable. On-device processing also removes network bottlenecks during large scan sessions.",
          "In a head-to-head decision, confirm where analysis runs, what data leaves your machine, and whether any account dependency exists. Privacy clarity should be part of product fit, not an afterthought, especially for long-term photo management tools."
        ],
      },
      {
        question: "Which option is better for a repeatable monthly cleanup routine?",
        paragraphs: [
          "A repeatable routine needs more than one-time duplicate scans. It should include duplicate checks, blur passes, organization updates, and space optimization steps. Otherwise, each month turns into another manual multi-tool process.",
          "For users who want one consolidated pipeline, Photiva's broader feature set is better aligned with recurring maintenance. For users who only need occasional duplicate removal, a narrower utility may be enough, but additional tasks will still require separate workflows."
        ],
      },
      {
        question: "How should beginners interpret Photiva vs Gemini 2 feature differences?",
        paragraphs: [
          "Beginners should map features to outcomes, not terminology. Ask simple questions: Will this tool only remove duplicates, or will it also help me keep sharper photos, organize events, and reduce storage from oversized media? Outcome-based comparison is easier than reading long capability lists without context.",
          "A beginner-friendly decision framework is to rank needs by urgency: immediate duplicate cleanup, monthly maintenance speed, and long-term organization quality. If only the first item matters, a narrow option may suffice temporarily. If all three matter, broader workflow coverage becomes the safer long-term choice."
        ],
      },
      {
        question: "What comparison criteria matter most for power users and creators?",
        paragraphs: [
          "Power users need precision and control. Criteria should include deterministic matching methods, threshold tuning, quality scoring transparency, and export-safe handling for edited assets. Creators also need confidence that cleanup actions will not disrupt project archives or client deliverables.",
          "For this audience, integrated workflow depth usually outweighs basic duplicate speed. The ability to combine similarity review, blur filtering, metadata organization, and rollback in one system reduces cognitive load and avoids fragmented processes. Professional consistency depends on dependable operations, not isolated single-feature wins."
        ],
      },
      {
        question: "How can you run a fair trial before choosing between Photiva and Gemini 2?",
        paragraphs: [
          "Use the same sample library for both tools and define objective scoring criteria before testing. Track duplicates detected, similar groups found, blur candidates flagged, and total review time to completion. Include a qualitative score for trust: how confident you feel approving deletions at each stage.",
          "A fair trial should also include a maintenance simulation. Run a second pass after importing a fresh batch to see how easily each workflow handles recurring cleanup. This reveals practical ownership cost over time and helps you choose based on sustained results instead of first-run impressions."
        ],
      },
      {
        question: "Which users benefit most from choosing Photiva over Gemini 2?",
        paragraphs: [
          "Users with large, mixed-quality libraries benefit most from broader workflow depth. If your pain points include blurry bursts, disorganized event history, oversized Live Photos, and recurring duplicate clutter, an all-in-one process is usually more effective than single-purpose scanning. This profile includes parents, creators, and professionals managing multiple import sources.",
          "Users who prefer privacy-first local processing and predictable one-time pricing also see stronger fit with Photiva. In contrast, users with very small libraries and occasional duplicate cleanup may prioritize a narrower tool initially. The best choice depends on whether your goal is quick dedupe or sustained photo library health across the full lifecycle."
        ],
      },
      {
        question: "How do you decide if the broader workflow in Photiva is worth it for your use case?",
        paragraphs: [
          "Estimate total monthly cleanup time with your current process, including duplicate review, blur sorting, organization, and post-cleanup compression. If these tasks already consume multiple sessions or keep getting postponed, broader workflow coverage usually delivers immediate value by reducing tool-switching and decision overhead.",
          "Also evaluate risk tolerance. Users managing irreplaceable memories or client media benefit from rollback and structured review because mistakes are costly. If your primary goal is speed plus safety across recurring maintenance, a comprehensive workflow is often worth more than narrowly optimized duplicate-only performance."
        ],
      },
    ],
    manualMethod: [
      "Run duplicate scanning first, then perform manual blur review in separate passes.",
      "Organize remaining files by EXIF date and event groups manually in Photos or Finder.",
      "Apply compression and Live Photo cleanup after organization for final storage reduction.",
    ],
    manualLimitations: [
      "Comparison across multiple tools increases context switching and error risk.",
      "Duplicate-only tools do not resolve blur and organization backlog.",
      "No single source of truth for cleanup progress.",
      "Limited recovery safety without explicit rollback support.",
    ],
    howPhotivaHelps: [
      "SHA-256 matching for exact duplicate confidence.",
      "Perceptual hashing + Vision ML for similar image grouping.",
      "Laplacian variance blur detection for quality filtering.",
      "EXIF-based organization and event auto-detection for durable structure.",
      "HEIF conversion and compression for post-cleanup storage optimization.",
      "30-day rollback for safe experimentation.",
      "100% on-device privacy for sensitive libraries.",
    ],
    pros: [
      "More complete workflow than duplicate-only cleanup tools.",
      "Combines cleanup and organization in one environment.",
      "Privacy-first local processing model.",
      "Clear value for users managing large or growing libraries.",
    ],
    cons: [
      "Users seeking only quick duplicate deletion may not use every advanced feature immediately.",
      "Workflow breadth requires light onboarding to configure preferences.",
      "No tool replaces a proper external backup plan.",
    ],
    faqs: [
      {
        question: "Is Photiva vs Gemini 2 mainly a duplicate detection comparison?",
        answer:
          "Not entirely. The bigger difference is whether you need full cleanup and organization beyond duplicate finding.",
      },
      {
        question: "Which is better for blurry photo cleanup?",
        answer:
          "A workflow with dedicated blur detection is better if image quality pruning is a core goal.",
      },
      {
        question: "Can either option organize Apple Photos by events?",
        answer:
          "Choose a tool with event auto-detection and EXIF-driven organization if structured output matters.",
      },
      {
        question: "Does one-time pricing matter in this comparison?",
        answer:
          "For many users, yes. One-time purchase can be more predictable for periodic maintenance workflows.",
      },
      {
        question: "Is on-device processing available?",
        answer:
          "Photiva is designed for 100% on-device analysis and cleanup to preserve privacy.",
      },
      {
        question: "Can I switch tools later if my needs change?",
        answer:
          "Yes. Start with your current priority, but reassess if you need broader organization and quality control.",
      },
      {
        question: "What matters most for long-term photo library health?",
        answer:
          "Repeatable workflow coverage across duplicates, quality, organization, and recovery safety.",
      },
    ],
    ctaHeading: "Need more than duplicate cleanup in the Photiva vs Gemini 2 decision?",
    ctaCopy:
      "Try Photiva for an end-to-end macOS workflow that covers duplicates, blur, organization, and safe rollback with fewer manual handoffs, clearer review checkpoints, and steadier monthly maintenance cycles.",
  },
};

export function buildGuideMetadata(guide: GuideData): Metadata {
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${SITE_URL}/guides/${guide.slug}`,
      siteName: "Photiva",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `Photiva guide: ${guide.primaryKeyword}`,
        },
      ],
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: ["/og-image.png"],
    },
  };
}

export function buildGuideSchema(guide: GuideData) {
  const pageUrl = `${SITE_URL}/guides/${guide.slug}`;

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Photiva",
    applicationCategory: "UtilityApplication",
    operatingSystem: "macOS 14 Sonoma or later",
    url: SITE_URL,
    downloadUrl: SITE_URL,
    description: guide.entitySentence,
    offers: {
      "@type": "Offer",
      price: "29.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Photiva",
    brand: {
      "@type": "Brand",
      name: "Photiva",
    },
    description: guide.entitySentence,
    image: `${SITE_URL}/og-image.png`,
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "USD",
      price: "29.99",
      availability: "https://schema.org/InStock",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.h1,
    description: `Step-by-step process for ${guide.primaryKeyword}.`,
    totalTime: "PT20M",
    supply: [
      {
        "@type": "HowToSupply",
        name: "Mac running macOS 14 Sonoma or later",
      },
      {
        "@type": "HowToSupply",
        name: "Apple Photos library or photo folders",
      },
    ],
    step: guide.manualMethod.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
    })),
  };

  if (realRating) {
    (product as Record<string, unknown>).aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: realRating.value,
      ratingCount: realRating.count,
      bestRating: "5",
      worstRating: "1",
    };
  }

  return [softwareApplication, product, faqPage, howTo];
}

export function getGuide(slug: GuideSlug): GuideData {
  return guideData[slug];
}
