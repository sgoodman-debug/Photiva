import { GuidePage } from "@/components/seo/GuidePage";
import { buildGuideMetadata, getGuide } from "@/lib/seo-guides";

const guide = getGuide("remove-duplicate-photos-mac");

export const metadata = buildGuideMetadata(guide);

export default function RemoveDuplicatePhotosMacPage() {
  return <GuidePage slug="remove-duplicate-photos-mac" />;
}
