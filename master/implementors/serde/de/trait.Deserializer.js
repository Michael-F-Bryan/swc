(function() {var implementors = {};
implementors["plist"] = ["impl&lt;'de, 'a, I&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a mut <a class=\"struct\" href=\"plist/serde/struct.Deserializer.html\" title=\"struct plist::serde::Deserializer\">Deserializer</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html\" title=\"trait core::iter::traits::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"plist/enum.PlistEvent.html\" title=\"enum plist::PlistEvent\">PlistEvent</a>, <a class=\"enum\" href=\"plist/enum.Error.html\" title=\"enum plist::Error\">Error</a>&gt;&gt;,&nbsp;</span>","impl&lt;'de, 'a, I&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"plist/serde/de/struct.StructValueDeserializer.html\" title=\"struct plist::serde::de::StructValueDeserializer\">StructValueDeserializer</a>&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html\" title=\"trait core::iter::traits::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"plist/enum.PlistEvent.html\" title=\"enum plist::PlistEvent\">PlistEvent</a>, <a class=\"enum\" href=\"plist/enum.Error.html\" title=\"enum plist::Error\">Error</a>&gt;&gt;,&nbsp;</span>",];
implementors["serde_json"] = ["impl&lt;'de, 'a, R:&nbsp;<a class=\"trait\" href=\"serde_json/de/trait.Read.html\" title=\"trait serde_json::de::Read\">Read</a>&lt;'de&gt;&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a mut <a class=\"struct\" href=\"serde_json/de/struct.Deserializer.html\" title=\"struct serde_json::de::Deserializer\">Deserializer</a>&lt;R&gt;","impl&lt;'de, 'a, R&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/de/struct.MapKey.html\" title=\"struct serde_json::de::MapKey\">MapKey</a>&lt;'a, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"serde_json/de/trait.Read.html\" title=\"trait serde_json::de::Read\">Read</a>&lt;'de&gt;,&nbsp;</span>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"enum\" href=\"serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/value/de/struct.SeqDeserializer.html\" title=\"struct serde_json::value::de::SeqDeserializer\">SeqDeserializer</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/value/de/struct.MapDeserializer.html\" title=\"struct serde_json::value::de::MapDeserializer\">MapDeserializer</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'de <a class=\"enum\" href=\"serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/value/de/struct.SeqRefDeserializer.html\" title=\"struct serde_json::value::de::SeqRefDeserializer\">SeqRefDeserializer</a>&lt;'de&gt;","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/value/de/struct.MapRefDeserializer.html\" title=\"struct serde_json::value::de::MapRefDeserializer\">MapRefDeserializer</a>&lt;'de&gt;","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/value/de/struct.MapKeyDeserializer.html\" title=\"struct serde_json::value::de::MapKeyDeserializer\">MapKeyDeserializer</a>&lt;'de&gt;","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/struct.Number.html\" title=\"struct serde_json::Number\">Number</a>","impl&lt;'de, 'a&gt; <a class=\"trait\" href=\"serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt; for &amp;'a <a class=\"struct\" href=\"serde_json/struct.Number.html\" title=\"struct serde_json::Number\">Number</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
