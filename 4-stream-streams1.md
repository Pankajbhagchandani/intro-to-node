

        ->  [  stream object s  ]   -> (data)
Data:
    s.write(data)                    s.on('data')

Backckpressure:

    s.write() result is false        s.on('drain')

Close:
    s.end()                          s.on('end')


write,end(data, [encoding], [callback])


Composing streams:

      - > S1 ->  S2 ->

      s1.pipe(s2)

Roughly is

      s1.on('data', function(chunk) { var ok = s2.write(chunk); if(!ok) s1.pause(); });
      s2.on('drain', function() { s1.resume(); }
