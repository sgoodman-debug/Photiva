import { GuidePage } from "@/components/seo/GuidePage";
import { buildGuideMetadata, getGuide } from "@/lib/seo-guides";

const guide = getGuide("mac-photo-cleaner");

export const metadata = buildGuideMetadata(guide);

export default function MacPhotoCleanerPage() {
  return <GuidePage slug="mac-photo-cleaner" />;
}
