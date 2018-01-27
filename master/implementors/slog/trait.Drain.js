(function() {var implementors = {};
implementors["slog"] = [];
implementors["slog_async"] = ["impl <a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a> for <a class=\"struct\" href=\"slog_async/struct.AsyncCore.html\" title=\"struct slog_async::AsyncCore\">AsyncCore</a>","impl <a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a> for <a class=\"struct\" href=\"slog_async/struct.Async.html\" title=\"struct slog_async::Async\">Async</a>",];
implementors["slog_envlogger"] = ["impl&lt;T:&nbsp;<a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a>&gt; <a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a> for <a class=\"struct\" href=\"slog_envlogger/struct.EnvLogger.html\" title=\"struct slog_envlogger::EnvLogger\">EnvLogger</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a>&lt;Ok = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,&nbsp;</span>",];
implementors["slog_stdlog"] = ["impl <a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a> for <a class=\"struct\" href=\"slog_stdlog/struct.StdLog.html\" title=\"struct slog_stdlog::StdLog\">StdLog</a>",];
implementors["slog_term"] = ["impl&lt;D&gt; <a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a> for <a class=\"struct\" href=\"slog_term/struct.FullFormat.html\" title=\"struct slog_term::FullFormat\">FullFormat</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"slog_term/trait.Decorator.html\" title=\"trait slog_term::Decorator\">Decorator</a>,&nbsp;</span>","impl&lt;D&gt; <a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a> for <a class=\"struct\" href=\"slog_term/struct.CompactFormat.html\" title=\"struct slog_term::CompactFormat\">CompactFormat</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"slog_term/trait.Decorator.html\" title=\"trait slog_term::Decorator\">Decorator</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
