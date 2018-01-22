(function() {var implementors = {};
implementors["slog"] = [];
implementors["slog_async"] = ["impl <a class=\"trait\" href=\"slog/trait.Serializer.html\" title=\"trait slog::Serializer\">Serializer</a> for <a class=\"struct\" href=\"slog_async/struct.ToSendSerializer.html\" title=\"struct slog_async::ToSendSerializer\">ToSendSerializer</a>",];
implementors["slog_stdlog"] = ["impl&lt;W:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt; <a class=\"trait\" href=\"slog/trait.Serializer.html\" title=\"trait slog::Serializer\">Serializer</a> for <a class=\"struct\" href=\"slog_stdlog/struct.KSV.html\" title=\"struct slog_stdlog::KSV\">KSV</a>&lt;W&gt;",];
implementors["slog_term"] = ["impl&lt;'a&gt; <a class=\"trait\" href=\"slog/trait.Serializer.html\" title=\"trait slog::Serializer\">Serializer</a> for <a class=\"struct\" href=\"slog_term/struct.Serializer.html\" title=\"struct slog_term::Serializer\">Serializer</a>&lt;'a&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"slog/trait.Serializer.html\" title=\"trait slog::Serializer\">Serializer</a> for <a class=\"struct\" href=\"slog_term/struct.CompactFormatSerializer.html\" title=\"struct slog_term::CompactFormatSerializer\">CompactFormatSerializer</a>&lt;'a&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
