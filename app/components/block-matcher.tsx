import { BlockApiData } from "@gocontento/client/lib/api-types";
import Hero from "@/app/components/blocks/hero";
import ImageAndText from "@/app/components/blocks/image-and-text";
import Box from "@/app/components/blocks/box";

export default function BlockMatcher({block}: { block: BlockApiData }) {
    switch (block.content_type.handle) {
        case "hero":
            return (
                <Hero block={block} />
            );

        case "image_and_text":
            return (
                <ImageAndText block={block} />
            );

        case "box_block":
            return (
                <Box block={block} />
            );

        default:
            return null;
    }
}