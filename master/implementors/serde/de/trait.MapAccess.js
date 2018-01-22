(function() {var implementors = {};
implementors["plist"] = ["impl&lt;'de, 'a, I&gt; <a class=\"trait\" href=\"serde/de/trait.MapAccess.html\" title=\"trait serde::de::MapAccess\">MapAccess</a>&lt;'de&gt; for <a class=\"struct\" href=\"plist/serde/de/struct.MapAndSeqAccess.html\" title=\"struct plist::serde::de::MapAndSeqAccess\">MapAndSeqAccess</a>&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html\" title=\"trait core::iter::traits::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"plist/enum.PlistEvent.html\" title=\"enum plist::PlistEvent\">PlistEvent</a>, <a class=\"enum\" href=\"plist/enum.Error.html\" title=\"enum plist::Error\">Error</a>&gt;&gt;,&nbsp;</span>",];
implementors["serde"] = [];
implementors["serde_json"] = ["impl&lt;'de, 'a, R:&nbsp;<a class=\"trait\" href=\"serde_json/de/trait.Read.html\" title=\"trait serde_json::de::Read\">Read</a>&lt;'de&gt; + 'a&gt; <a class=\"trait\" href=\"serde/de/trait.MapAccess.html\" title=\"trait serde::de::MapAccess\">MapAccess</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/de/struct.MapAccess.html\" title=\"struct serde_json::de::MapAccess\">MapAccess</a>&lt;'a, R&gt;","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.MapAccess.html\" title=\"trait serde::de::MapAccess\">MapAccess</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/value/de/struct.MapDeserializer.html\" title=\"struct serde_json::value::de::MapDeserializer\">MapDeserializer</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.MapAccess.html\" title=\"trait serde::de::MapAccess\">MapAccess</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/value/de/struct.MapRefDeserializer.html\" title=\"struct serde_json::value::de::MapRefDeserializer\">MapRefDeserializer</a>&lt;'de&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
