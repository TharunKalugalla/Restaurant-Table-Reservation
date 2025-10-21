import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Reviews() {
  // Example reviews with decimal ratings
  const reviews = [
    { id: 1, author: "Mr. Jain", rating: 5, text: "Amazing food and service!" },
    { id: 2, author: "Ms. Patel", rating: 4.5, text: "Great food and ambiance." },
    { id: 3, author: "Mr. Fernando", rating: 3.5, text: "Average experience overall." },
    { id: 4, author: "Ms. Silva", rating: 2.5, text: "Food was okay, could improve." },
  ];

  // Calculate average rating
  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  const totalRatings = reviews.length;

  // Count ratings by integer part
  const ratingCounts = [1, 2, 3, 4, 5].reduce((acc, rating) => {
    acc[rating] = reviews.filter(
      (r) => Math.round(r.rating) === rating
    ).length;
    return acc;
  }, {});

  // Utility: render stars (with half support)
  const renderStars = (rating, size = "w-4 h-4") => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    return (
      <div className="flex items-center">
        {Array.from({ length: full }).map((_, i) => (
          <Star key={`f-${i}`} className={`${size} fill-amber-500 text-amber-500`} />
        ))}
        {half && (
          <div className="relative">
            <Star className={`${size} text-muted`} />
            <Star
              className={`${size} fill-amber-500 text-amber-500 absolute left-0 top-0`}
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
          </div>
        )}
        {Array.from({ length: empty }).map((_, i) => (
          <Star key={`e-${i}`} className={`${size} text-muted`} />
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Heading */}
      <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Reviews</h2>
      <p className="text-sm mb-6 text-justify text-muted-foreground">
        Hear what our customers have to say about Raasa Restaurant.
      </p>

      {/* Review Carousel */}
      <div className="w-full mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem className="md:basis-1/2" key={review.id}>
                <Card className="p-4 border border-border w-full">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-semibold">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{review.author}</p>
                      {renderStars(review.rating, "w-3 h-3")}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{review.text}</p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="-right-6" />
        </Carousel>
      </div>

      {/* Rating Summary */}
      <div className="flex items-end gap-8 flex-wrap">
        {/* Average Rating */}
        <div>
          <div className="text-5xl font-serif font-bold text-foreground flex items-end gap-1 mb-2">
            <span>{averageRating.toFixed(1)}</span>
            <div className="text-xl text-muted-foreground">/5</div>
          </div>
          {renderStars(averageRating)}
          <p className="text-xs text-muted-foreground mt-2">{totalRatings} Ratings</p>
        </div>

        {/* Rating Distribution */}
        <div className="flex-1 space-y-2 min-w-[200px]">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = ratingCounts[rating] || 0;
            const percent = (count / totalRatings) * 100 || 0;
            return (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-4">{rating}</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-6 text-right">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}