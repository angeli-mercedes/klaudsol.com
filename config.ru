use Rack::Static,
  :urls => ["/assets"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
