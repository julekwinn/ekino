type TProps = {
  params: {
    slug?: string[];
  };
};

export default function MoviesTVPage({ params }: TProps) {
  return (
    <>
      <article>
        <section>
          Params: {params.slug && params.slug?.toString()}
          <br />
        </section>
      </article>
    </>
  );
}
